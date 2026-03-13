from fastapi import APIRouter
from pydantic import BaseModel
import numpy as np

router = APIRouter(prefix="/ml", tags=["ml"])

class PredictionInput(BaseModel):
    features: list[float]

@router.post("/predict")
async def predict(data: PredictionInput):
    # Example: simple ML prediction
    features = np.array(data.features)
    prediction = float(np.mean(features) * 1.5)  # Simple calculation
    
    return {
        "prediction": prediction,
        "confidence": 0.95
    }