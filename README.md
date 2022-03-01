<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn
```

## Running the app

```bash
# before start
$ yarn migration:run

# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

---

<p align="center">Strider Test</p>

## Time used

Around 10 hours were spent on this project. This project was build using Node v14+ and Yarn.

By default, App port is 3000.
For API documentation, with the app running, check it at: <a href="http://localhost:3000/api">Swagger API Documentation</a>

### To Do:
- Add Tests

## Planning:

Questions to the Product Manager:
- What's different from the Quote/Repost we already have?
- Why use in on a separated view?
- When a User that was mentioned is deleted, what should happen with that post? Keep it with @ empty or delete it?

How will be implemented:
- Create a new Service/Controller/Dto for Create Reply To Post
- Add new relation on the Users & Posts Entities to cover this type of posts as Replies
- Add new GetReply Controller/Service to get all the replies
- Add totalReplies to Users to speed up this information

To create a Reply, would need a: User that is making a Reply, User that it's receiving the Reply, Post the is receiving the Reply. Everything could be IDs on the Dto, as so: [userId, replyUserId, postId]

## Critique:

- This project was good, because it was my first time touching Nest, so it was a challenge for me, trying to get the principles of SOLID, KISS and DRY done correctly (I may have made some mistakes).
- Since I made this project to be as simple as possible, in this first version I used sqlite (which was kind of a challenge for it's types) instead of a database like postgres to not use time on setting up an environment for that (like a Docker container), so when running the migrations, the database would be created and no further configuration needed to run the App.
- So, having this db in mind, first thing for scaling it was to change it to a postgres DB, where we can use a strategy around kubernetes if we need to have replicas of it for read and create activities (if too many access) and fix some concurrency problems we may face when manipulating the totalX properties on users.
- If I had more time, I'd have added tests and refactored some parts. Tests weren't added because my editor was not configured to relative paths for the TypeScript, so it wansn't finding the imports I was using (and I didn't configured it correctly to find them).
