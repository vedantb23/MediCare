from fastapi import FastAPI, HTTPException
# app = FastAPI()
app = FastAPI(title="MediCare AI Service")
@app.get("/")
def root():
    return {"status": "HELO FROM AI ", "service": "medicare-ai"}

from pydantic import BaseModel
from dotenv import load_dotenv
import os
import json
import re
from groq import Groq

load_dotenv()

client = Groq(api_key=os.getenv("GROQ_API_KEY"))

class Doctor(BaseModel):
    id: str
    name: str
    specialization: str

class TriageRequest(BaseModel):
    symptoms: str
    doctors: list[Doctor]

def extract_json(text: str):
    cleaned = re.sub(r"```(?:json)?", "", text)
    cleaned = cleaned.replace("```", "").strip()
    return json.loads(cleaned)

@app.post("/triage")
def triage(req: TriageRequest):
    prompt = f"""
You are a medical triage assistant.

Rules:
- Do NOT diagnose
- Do NOT suggest medicines
- Choose ONE doctor ONLY from the list
- Use ONLY provided doctors
- Return ONLY valid JSON (no markdown)
- Exact 4 precautions 
Doctors:
{[d.dict() for d in req.doctors]}

Symptoms:
{req.symptoms}

Return JSON in this exact format:
{{
  "specialization": "",
  "urgency": "Low | Medium | High",
  "doctor": {{ "id": "", "name": "" }},
  "precautions": [],
  "reason": ""
}}
"""

    try:
        response = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[
                {"role": "system", "content": "You output ONLY JSON."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.2,
        )

        text = response.choices[0].message.content
        return extract_json(text)

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
