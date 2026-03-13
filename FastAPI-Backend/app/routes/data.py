from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/data", tags=["data"])

class DataItem(BaseModel):
    value: float
    label: str

@router.post("/process")
async def process_data(item: DataItem):
    # Process data
    result = item.value * 2
    return {
        "original": item.value,
        "processed": result,
        "label": item.label
    }

@router.get("/stats")
async def get_stats():
    return {
        "total_records": 100,
        "avg_value": 45.5,
        "status": "healthy"
    }