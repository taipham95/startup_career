import express, { Application, Request, Response } from 'express';
import { MongoClient, Collection } from 'mongodb';

const app: Application = express();
const port: number = 3000;
const url: string = 'mongodb://localhost:27017';
const dbName: string = 'applicant_db';

interface Applicant {
  name: string;
  email: string;
  phone: string;
}

app.use(express.json());

app.post('/applicant', (req: Request, res: Response) => {
  MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if (err) throw err;
    const db = client.db(dbName);
    const collection: Collection<Applicant> = db.collection('applicants');
    const newApplicant: Applicant = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone
    };
    collection.insertOne(newApplicant, (err, result) => {
      if (err) throw err;
      console.log(`Inserted ${result.insertedCount} documents into the collection`);
      res.send('Applicant added successfully!');
      client.close();
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
