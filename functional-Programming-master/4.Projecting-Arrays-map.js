// Project an array of videos into an array of {id,title} pairs using forEach()

var newReleasesMov = [
    {
        "id": 1,
        "title": "Hard",
        "boxart": "Hard.jpg",
        "uri": "http://vikask/movies/1",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 2,
        "title": "Bad",
        "boxart": "Bad.jpg",
        "uri": "http://vikask/movies/2",
        "rating": [5.0],
        "bookmark": [{ id: 1, time: 2 }]
    },
    {
        "id": 3,
        "title": "Cham",
        "boxart": "Cham.jpg",
        "uri": "http://vikask/movies/3",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 4,
        "title": "Fra",
        "boxart": "Fra.jpg",
        "uri": "http://vikask/movies/4",
        "rating": [5.0],
        "bookmark": [{ id: 4, time: 6 }]
    }
]
newReleasesMov1.map(video => {
    console.log({ id: video.id, title: video.title, boxart: video.boxart, uri: video.uri });
});