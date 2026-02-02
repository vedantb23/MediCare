def predict(data):
    # example "small AI" logic
    age = data.get("age", 0)
    risk = 0.2

    if age > 60:
        risk += 0.3
    if data.get("smoker"):
        risk += 0.3

    return min(risk, 1.0)
