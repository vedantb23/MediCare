from fastapi import FastAPI,Request
from pydantic import BaseModel
import joblib
import os
import sklearn
print("FastAPI sklearn version:", sklearn.__version__)


app = FastAPI()

# Load model 
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
# print(os.getcwd())
MODEL_PATH = os.path.join(BASE_DIR, "..", "models", "doctor_specialization_pipeline.pkl")
model=joblib.load(MODEL_PATH)
# Health check
@app.get("/")
def read_root():
    return {"message": "Doctor Recommendation API Running"}

# Prediction endpoint
@app.post("/predict")
async def predict_specialization(request: Request):
    data = await request.json()
    print("req->",data)
    symptoms = data.get("symptoms")
    prediction = model.predict([symptoms])[0]
    probabilities = model.predict_proba([symptoms])[0]
    confidence = float(max(probabilities))

    if confidence < 0.60:
        return {
            "specialization": "General Medicine",
            "confidence": confidence,
            "note": "Low confidence prediction",
        }

    return {
        "specialization": prediction,
        "confidence": confidence,
        "note":""
    }

