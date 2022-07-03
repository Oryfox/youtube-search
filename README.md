# youtube-search
YouTube Search without API key deployment using docker and express js

## Usage
```
GET https://yt.oryfox.de/?query=<YOUR_SEARCH>
```
Example response
```json
[
  {
    "id": {
      "videoId":"K17df81RL9Y"
    },
    "url":"https://www.youtube.com/watch?v=K17df81RL9Y",
    "title":"AURORA - Cure For Me (Official Video)",
    "description":"","duration_raw":"3:22",
    "snippet": {
      "url":"https://www.youtube.com/watch?v=K17df81RL9Y",
      "duration":"3:22",
      "publishedAt":"11 months ago",
      "thumbnails": {
        "id":"K17df81RL9Y",
        "url":"https://i.ytimg.com/vi/K17df81RL9Y/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC0HKPaDtNE5ZdIWvbEqNIzTuskpg",
        "default": {
          "url":"https://i.ytimg.com/vi/K17df81RL9Y/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC0HKPaDtNE5ZdIWvbEqNIzTuskpg",
          "width":720,
          "height":404
        },
        "high": {
          "url":"https://i.ytimg.com/vi/K17df81RL9Y/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC0HKPaDtNE5ZdIWvbEqNIzTuskpg",
          "width":720,
          "height":404
        },
        "height":404,
        "width":720
      },
      "title":"AURORA - Cure For Me (Official Video)",
      "views":"20980568"
    },
    "views":"20980568"
  },
  ...
]
```
