# Broadway Price Aggregator
This project displays ticket prices for various Broadway shows across different sites, allowing users to compare prices. 


## Server
The REST API, written with TypeScript and NestJS, connectgs to a PostgreSQL database. The API uses MikroORM to connect with the database. 
The server files are all in `/server`. Migrations are in their own folder, and there are folders for each individaul entiy and the controller
and repository that go with it. 

## Client
The UI was written with ReactJS and TypeScript, and it includes the Material UI library for reusable components. 
The client files are all in `/client/src`, and there are folders for indivudal pages, components used in multiple pages, and logic to fetch 
data from the database. 
