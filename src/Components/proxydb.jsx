import { faker } from "@faker-js/faker";

const POST = [
  {
    username: faker.internet.userName(),
    avatar: faker.image.avatar(),
    url:
      "https://player.vimeo.com/external/430976948.sd.mp4?s=4134e843d33e4adb036339b6043b912455b9453d&profile_id=165&oauth2_token_id=57447761",
    description: faker.lorem.lines(1),
    song: faker.lorem.sentence(2),
    likes: faker.datatype.number({ min: 500, max: 999 }),
    comments: faker.datatype.number({ min: 10, max: 500 })
  },
  {
    username: faker.internet.userName(),
    avatar: faker.image.avatar(),
    url:
      "https://player.vimeo.com/progressive_redirect/playback/687602022/rendition/540p?loc=external&oauth2_token_id=57447761&signature=6c95a6d389f7dc836e66743d23cebefe17624c7a5bd3a6c4b08b106e70279205",
    description: faker.lorem.lines(1),
    song: faker.lorem.sentence(2),
    likes: faker.datatype.number({ min: 500, max: 999 }),
    comments: faker.datatype.number({ min: 10, max: 500 })
  },
  {
    username: faker.internet.userName(),
    avatar: faker.image.avatar(),
    url:
      "https://player.vimeo.com/external/614741292.sd.mp4?s=5a351e4a1ca5a11f8b8126c413ebe040f0c7065f&profile_id=165&oauth2_token_id=57447761",
    description: faker.lorem.lines(1),
    song: faker.lorem.sentence(2),
    likes: faker.datatype.number({ min: 500, max: 999 }),
    comments: faker.datatype.number({ min: 10, max: 500 })
  },
  {
    username: faker.internet.userName(),
    avatar: faker.image.avatar(),
    url:
      "https://player.vimeo.com/external/447434172.sd.mp4?s=f34752a54fd0363e88c50548acb71fcc4b63eb5f&profile_id=165&oauth2_token_id=57447761",
    description: faker.lorem.lines(1),
    song: faker.lorem.sentence(2),
    likes: faker.datatype.number({ min: 500, max: 999 }),
    comments: faker.datatype.number({ min: 10, max: 500 })
  },
  {
    username: faker.internet.userName(),
    avatar: faker.image.avatar(),
    url:
      "https://player.vimeo.com/external/592772975.sd.mp4?s=1ace120228a4ecb52f623fb714b52ffb1339fac8&profile_id=165&oauth2_token_id=57447761",
    description: faker.lorem.lines(1),
    song: faker.lorem.sentence(2),
    likes: faker.datatype.number({ min: 500, max: 999 }),
    comments: faker.datatype.number({ min: 10, max: 500 })
  },
  {
    username: faker.internet.userName(),
    avatar: faker.image.avatar(),
    url:
      "https://player.vimeo.com/progressive_redirect/playback/706178738/rendition/720p?loc=external&oauth2_token_id=57447761&signature=df564a17b2c5d3dec8c40d8f132347476813dc10e1be887f49c3814f0d8f0c6c",
    description: faker.lorem.lines(1),
    song: faker.lorem.sentence(2),
    likes: faker.datatype.number({ min: 500, max: 999 }),
    comments: faker.datatype.number({ min: 10, max: 500 })
  },
  {
    username: faker.internet.userName(),
    avatar: faker.image.avatar(),
    url:
      "https://player.vimeo.com/external/626284080.sd.mp4?s=ae33efa0642a979a6c248d7e11902fca06a49ddb&profile_id=165&oauth2_token_id=57447761",
    description: faker.lorem.lines(1),
    song: faker.lorem.sentence(2),
    likes: faker.datatype.number({ min: 500, max: 999 }),
    comments: faker.datatype.number({ min: 10, max: 500 })
  },
  {
    username: faker.internet.userName(),
    avatar: faker.image.avatar(),
    url:
      "https://player.vimeo.com/external/643175192.sd.mp4?s=4ba9b7097e06890c169c08369f0d3d25744f387e&profile_id=165&oauth_token_id=57447761",
    description: faker.lorem.lines(1),
    song: faker.lorem.sentence(2),
    likes: faker.datatype.number({ min: 500, max: 999 }),
    comments: faker.datatype.number({ min: 10, max: 500 })
  },
  {
    username: faker.internet.userName(),
    avatar: faker.image.avatar(),
    url:
      " https://player.vimeo.com/external/468821581.sd.mp4?s=126b63ceb0c2977cac6e6b98da38f1a68ae17e94&profile_id=165&oauth2_token_id=57447761",
    description: faker.lorem.lines(1),
    song: faker.lorem.sentence(2),
    likes: faker.datatype.number({ min: 500, max: 999 }),
    comments: faker.datatype.number({ min: 10, max: 500 })
  },
  {
    username: faker.internet.userName(),
    avatar: faker.image.avatar(),
    url:
      "https://storage.coverr.co/videos/U4ae72v58K8cFra8LYE9ASoIS5WOjdR4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjUyNDY2MTY2fQ.QEfZOXy0I7VVxPuUDEBZfeZLF28haaSsTdhMZ_gPLo0",
    description: faker.lorem.lines(1),
    song: faker.lorem.sentence(2),
    likes: faker.datatype.number({ min: 500, max: 999 }),
    comments: faker.datatype.number({ min: 10, max: 500 })
  },
  {
    username: faker.internet.userName(),
    avatar: faker.image.avatar(),
    url:
      "https://player.vimeo.com/external/661815876.sd.mp4?s=41d5e20af602a81f0dcb6fb51c3ff717618cbce3&profile_id=165&oauth_token_id=57447761",
    description: faker.lorem.lines(1),
    song: faker.lorem.sentence(2),
    likes: faker.datatype.number({ min: 500, max: 999 }),
    comments: faker.datatype.number({ min: 10, max: 500 })
  }
];

export default POST;
