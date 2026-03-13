from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import users, data, ml
from app.config import settings

app = FastAPI(
    title="Frontend API",
    description="Backend for React TypeScript Frontend",
    version="1.0.0"
)

# CORS Middleware (connect to React frontend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(users.router)
app.include_router(data.router)
app.include_router(ml.router)

@app.get("/")
async def root():
    return {"message": "FastAPI Backend is running!"}

@app.get("/health")
async def health_check():
    return {
        "status": "healthy",
        "database": "connected",
        "version": "1.0.0"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "app.main:app",
        host="0.0.0.0",
        port=8000,
        reload=True
    )