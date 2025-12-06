import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

//const users = []

app.use(cors());
app.use(express.json());

app.post("/users", async (req, res) => {
  const { name, email, age } = req.body;

  try {
    const user = await prisma.user.create({
      data: { name, email, age },
    });

    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get("/users", async (req, res) => {    
  const users = await prisma.user.findMany();
  res.json(users);
});

app.put("/users/:id", async (req, res) => {
  const { name, email, age } = req.body;

  try {
    const user = await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: { name, email, age },
    });

    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete("/users/:id", async (req, res) => {
  const { name, email, age } = req.body;

  try {
    const user = await prisma.user.delete({
        where: {
            id: req.params.id
        },
    });

    res.status(200).json({message: 'USUARIO DELETADO COM SUCESSO!'});
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
