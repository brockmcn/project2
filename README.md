Project 2 Report:
1. You will create an app that has a coherent purpose and satisfies a personal creative itch.

Trip planner/scheduling app

2. You will not write a to-do list management app.

It is a trip planinng app

3. You may work with a partner or as an individual.

Collaborated with Rachel Stern

4. The code must be written by you and your partner, and any assets must be made by you and your partner or conform to their license.

All code was written and all assets conform to licenses.

5. Your app will have both a back-end data store and web service and a front-end client.

project2-frontend and project2-backend

6. You will create a front-end client using React’s functional components and hooks. (Do not use classes for making components.)

Front-end clientmade with React's functional components and hooks.

7. The content of your client must change dynamically as the user interacts with it. (Sites with only static content generally should not be written with React.)

The notes change dynamically as the user interacts with it.

8. You will manage state in your client using Redux.

State management used in client using Redux.

9. The user interface of your client should follow the aesthetic and usability principles described in project 1, including clean spacing, coherent alignment, sufficient contrast, harmonious colors, and responsive design.

The simple front end design has clean spacing and coherent alignment with a very readable interface.

10. You will access your web service from your client using your own calls to fetch and not through any helper library.

Fetches were used on host (backend url).

11. You will indicate asynchronous activity to the user via the GUI. For example, while a fetch executes, you show a progress wheel.

Progress wheel implemented using React spinners (see App.js).

12. Your client must be free from all warnings and errors.

No warnings or errors during compilation.

13. Your front-end client must be stored in a Git repository that you have shared with your instructor. On GitHub, GitLab, and Bitbucket, share with the user twodee.

project2-frontend in github

14. Your front-end client must be available through the URL https://project2.YOUR-DOMAIN-NAME. It must be served out via HTTPS over port 443. If visitors access your client through port 80, they must be redirected automatically to port 443. The configuration is very similar to that of project 1.

front-end client accessible through https://project2.brock347.me

15. Your app will store its data long-term in a relational database. There’s nothing wrong with NoSQL databases like MongoDB, but they are intentionally outlawed to align our focus and to give us more experience with relational databases. Your database need not have multiple tables.

Data is stored in the backend in a relational database.

16. You will provide an Express-based web service for interacting with the database. The service must only be directly accessible from your droplet, and not from outside. Use ufw to block all ports but the ones you need for SSH and your allowed web servers.

ran ufw deny on the localhost port

17. The web service must communicate send and receive complex data as JSON.

Notes are sent from the database and are received from the database as complex JSON.

18. The endpoints of the web service and any parameters should be appropriately named.

Endpoints are appropriately named (GET, POST, PATCH, DELETE).

19. The web service must support cross-origin resource sharing.

The web service requires CORS

20. Your web service must be started using a process manager like pm2 so that it stays running.

Web service is implement using pm2 and is always running

21. You will create an Nginx server that allows global, encrypted access to your web service.

Nginx server was created and is in droplet under enabled-sites

22. Your back-end must be stored in a separate Git repository that you have shared with your instructor. On GitHub, GitLab, and Bitbucket, share with the user twodee.

Backend is stored in project2-backend github repository
