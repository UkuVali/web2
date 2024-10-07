import express from "express";

interface Film {
  id: number;
  title: string;
  director: string;
  duration: number;
  budget?: number;
  description?: string;
  imageUrl?: string;
}

class MyMoviesApi {
  private app: express.Application;
  private films: Film[] = [
    {
      id: 1,
      title: "Inception",
      director: "Christopher Nolan",
      duration: 148,
      budget: 160,
      description: "https://example.com/inception.jpg",
    },
    {
      id: 2,
      title: "Interstellar",
      director: "Christopher Nolan",
      duration: 169,
      budget: 165,
      description: "https://example.com/interstellar.jpg",
    },
    {
      id: 3,
      title: "Dunkirk",
      director: "Christopher Nolan",
      duration: 106,
      budget: 185,
      description: "https://example.com/dunkirk.jpg",
    },
  ];

  constructor() {
    this.app = express();
    this.setupRoutes();
    this.startServer();
  }

  private setupRoutes(): void {
    this.app.get("/films", (req, res) => {
      res.json(this.films);
    });
  }

  private startServer(): void {
    const port = process.env.PORT || 3000;
    this.app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
}

new MyMoviesApi();
