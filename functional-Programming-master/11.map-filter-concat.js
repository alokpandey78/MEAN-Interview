    /*  Retrieve id, title, and a 150x200 box art url for every video */
    var movieLists = [{
            name: "Instant Queue",
            videos: [{
                    "id": 70111470,
                    "title": "Die",
                    "boxarts": [{
                            width: 150,
                            height: 200,
                            url: "http:/vikask.com/D.jpg"
                        },
                        {
                            width: 200,
                            height: 200,
                            url: "http:/vikask.com/D.jpg"
                        }
                    ],
                    "url": "http:/vikask.com/D.jpg",
                    "rating": 4.0,
                    "bookmark": []
                },
                {
                    "id": 654356453,
                    "title": "Bad Boys",
                    "boxarts": [{
                            width: 200,
                            height: 200,
                            url: "http:/vikask.com/a.jpg"
                        },
                        {
                            width: 150,
                            height: 200,
                            url: "http:/vikask.com/a.jpg"
                        }

                    ],
                    "url": "http://vikask.com/titles/movies/701",
                    "rating": 5.0,
                    "bookmark": [{
                        id: 432534,
                        time: 65876586
                    }]
                }
            ]
        },
        {
            name: "New Releases",
            videos: [{
                    "id": 65432445,
                    "title": "Cham",
                    "boxarts": [{
                            width: 150,
                            height: 200,
                            url: "http:/vikask.com/c.jpg"
                        },
                        {
                            width: 200,
                            height: 200,
                            url: "http:/vikask.com/c.jpg"
                        }
                    ],
                    "url": "http://vikask.com/titles/movies/70111470",
                    "rating": 4.0,
                    "bookmark": []
                },
                {
                    "id": 675465,
                    "title": "Fracture",
                    "boxarts": [{
                            width: 200,
                            height: 200,
                            url: "http://vikask.com/Frac00.jpg"
                        },
                        {
                            width: 150,
                            height: 200,
                            url: "http://vikask.com/Frac00.jpg"
                        },
                        {
                            width: 300,
                            height: 200,
                            url: "http://vikask.com/Frac00.jpg"
                        }
                    ],
                    "url": "http://vikask.com/movies/70111470",
                    "rating": 5.0,
                    "bookmark": [{
                        id: 432534,
                        time: 65876586
                    }]
                }
            ]
        }
    ];

    movieLists.map(movieList => {
        return movieList.videos.
        map(video => {
            video.boxarts.
            filter(boxart => {
                return boxart.width === 300 && boxart.height === 200
            }).map(boxart => {
                console.log({
                    id: video.id,
                    title: video.title
                });
            })
        })
    })