var config = 
{"workouts": [
    {
        "name": "Legs",
        "flavors": [
            { "name": "Short",
                "exercices": [
                    { "name": "Squats", 
                      "sets": [{"q": "8x"},{"q": "8x"},{"q": "5x"},{"q": "5x"}] },
                    { "name": "Leg extensions", 
                      "sets": [{"q": "10x"},{"q": "10x"},{"q": "7x"},{"q": "4x"}] },
                    { "name": "Inner leg abduction", 
                      "sets": [{"q": "12x"},{"q": "12x"},{"q": "12x"}] }
                ]
            },
            { "name": "Long",
                "exercices": [
                    { "name": "Squats", 
                      "sets": [{"q": "8x"},{"q": "8x"},{"q": "5x"},{"q": "5x"}] },
                    { "name": "Lunges", 
                      "sets": [{"q": "10x"},{"q": "10x"},{"q": "10x"}] },
                    { "name": "Inner leg abduction", 
                      "sets": [{"q": "12x"},{"q": "12x"},{"q": "12x"}] },
                    { "name": "Hip thrusts", 
                      "sets": [{"q": "8x"},{"q": "8x"},{"q": "8x"},{"q": "8x"}] },
                    { "name": "Outer leg abduction", 
                      "sets": [{"q": "12x"},{"q": "12x"},{"q": "12x"}] }
                ]
            }
        ] 
    },
    {
        "name": "Core",
        "flavors": [
            { "name": "Short",
                "exercices": [
                    { "name": "Deadlifts", 
                      "sets": [{"q": "7x"},{"q": "7x"},{"q": "5x"},{"q": "5x"}] },
                    { "name": "Battle ropes", 
                      "sets": [{"q": "1m"},{"q": "1m"},{"q": "1m"}] },
                    { "name": "Woodchopper", 
                      "sets": [{"q": "10x (2x)"},{"q": "10x (2x)"},{"q": "10x (2x)"}] },
                ]
            },
            { "name": "Long",
                "exercices": [
                    { "name": "Deadlifts", 
                      "sets": [{"q": "7x"},{"q": "7x"},{"q": "5x"},{"q": "5x"}] },
                    { "name": "Hanging leg raises", 
                      "sets": [{"q": "12x"},{"q": "12x"},{"q": "12x"}]},
                    { "name": "Battle ropes", 
                      "sets": [{"q": "1m"},{"q": "1m"},{"q": "1m"}] },
                    { "name": "Woodchopper", 
                      "sets": [{"q": "10x (2x)"},{"q": "10x (2x)"},{"q": "10x (2x)"}] },
                    { "name": "Side planks", 
                      "sets": [{"q": "30s"},{"q": "40s"},{"q": "40s"}] }
                ]
            }
        ] 
    },
    {
        "name": "Arms+",
        "flavors": [
            { "name": "Short",
                "exercices": [
                    { "name": "Shrugs", 
                      "sets": [{"q": "12x"},{"q": "12x"},{"q": "12x"},{"q": "12x"}] },
                    { "name": "Calf raises", 
                      "sets": [{"q": "12x"},{"q": "12x"},{"q": "12x"},{"q": "12x"}] },
                    { "name": "Chest fly", 
                      "sets": [{"q": "10x"},{"q": "10x"},{"q": "10x"}] }
                ]
            },
            { "name": "Long",
                "exercices": [
                    { "name": "Shoulder press", 
                      "sets": [{"q": "10x"},{"q": "10x"},{"q": "8x"},{"q": "4x"}] },
                    { "name": "Shrugs", 
                      "sets": [{"q": "12x"},{"q": "12x"},{"q": "12x"}] },
                    { "name": "Calf raises", 
                      "sets": [{"q": "12x"},{"q": "12x"},{"q": "12x"}] },
                    { "name": "Chest fly", 
                      "sets": [{"q": "10x"},{"q": "10x"},{"q": "10x"},{"q": "10x"}] },
                    { "name": "Hammer curls", 
                      "sets": [{"q": "10x"},{"q": "10x"},{"q": "10x"},{"q": "10x"}] }
                ]
            }
        ] 
    },
    {
        "name": "Back",
        "flavors": [
            { "name": "Short",
                "exercices": [
                    { "name": "Pull-downs", 
                      "sets": [{"q": "10x"},{"q": "10x"},{"q": "10x"}] },
                    { "name": "Seated cable rows", 
                      "sets": [{"q": "10x"},{"q": "10x"},{"q": "10x"}] },
                    { "name": "Lower back", 
                      "sets": [{"q": "7x"},{"q": "7x"},{"q": "7x"},{"q": "7x"},{"q": "7x"}] }
                ]
            },
            { "name": "Long",
                "exercices": [
                    { "name": "Pull-ups", 
                      "sets": [{"q": "10x"},{"q": "10x"},{"q": "10x"}] },
                    { "name": "Seated cable rows", 
                      "sets": [{"q": "10x"},{"q": "10x"},{"q": "10x"}] },
                    { "name": "Rear deltoids", 
                      "sets": [{"q": "12x"},{"q": "12x"},{"q": "12x"}] },
                    { "name": "Lower back", 
                      "sets": [{"q": "7x"},{"q": "7x"},{"q": "7x"},{"q": "7x"},{"q": "7x"}] },
                    { "name": "Single dumbell rows", 
                      "sets": [{"q": "10x (2x)"},{"q": "10x (2x)"},{"q": "10x (2x)"}] }
                ]
            }
        ] 
    },
    {
        "name": "Cardio",
        "flavors": [
            { "name": "Easy",
                "exercices": [
                    { "name": "Bike", 
                      "sets": [{"q": "10m Moderate"}]}, 
                    { "name": "Treadmill", 
                      "sets": [{"q": "10m @ 6kph"}]}, 
                    { "name": "Elliptic", 
                      "sets": [{"q": "10m Moderate"}] }
                ]
            },
            { "name": "Intense",
                "exercices": [
                    { "name": "Bike", 
                      "sets": [{"q": "10m hill climb"}]}, 
                    { "name": "Bike", 
                      "sets": [{"q": "10m HIIT"}]}, 
                    { "name": "Treadmill", 
                      "sets": [{"q": "10m HIIT"}]}, 
                    { "name": "Burpees", 
                      "sets": [{"q": "8x"},{"q": "8x"},{"q": "8x"},{"q": "8x"}] }
                ]
            }
        ] 
    }
] 
}