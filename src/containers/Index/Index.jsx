import React from 'react';
import Editor from '../Editor/Editor.jsx'

const template = {
    "Presenting Complaint": {
        "index": 0,
        "notes": [
            {
                "note": [
                    {
                        "type": "contentEditable",
                        "data": ""
                    }
                ]
            }
        ]
    },
    "Social": {
        "index": 1,
        "notes": [
            {
                "note": [
                    {
                        "type": "contentEditable",
                        "data": ""
                    }
                ]
            }
        ]
    },
    "Medical/Dental History": {
        "index": 2,
        "notes": [
            {
                "note": [
                    {
                        "type": "contentEditable",
                        "data": "MH Checked, see section"
                    }
                ]
            },
            {
                "note": [
                    {
                        "type": "button",
                        "data": [
                            "Smokes",
                            "Ex Smoker",
                            "Never smoked"
                        ]
                    },
                    {
                        "type": "button",
                        "data": [
                            "Smokes",
                            "Ex Smoker",
                            "Never smoked"
                        ]
                    }
                ]
            },
            {
                "note": [
                    {
                        "type": "contentEditable",
                        "data": "Alcohol: "
                    },
                    {
                        "type": "button",
                        "data": [
                            "Under recommended limits",
                            "units per day:",
                            "Nil"
                        ]
                    }
                ]
            },
            {
                "note": [
                    {
                        "type": "contentEditable",
                        "data": "Sugars in Diet:"
                    }
                ]
            },
            {
                "note": [
                    {
                        "type": "contentEditable",
                        "data": "Acids in Diet:"
                    }
                ]
            },
            {
                "note": [
                    {
                        "type": "contentEditable",
                        "data": "Tooth brushing: "
                    },
                    {
                        "type": "button",
                        "data": [
                            "Once",
                            "twice",
                            ">2 times"
                        ]
                    },
                    {
                        "type": "contentEditable",
                        "data": " daily with "
                    },
                    {
                        "type": "button",
                        "data": [
                            "ETB",
                            "MTB",
                            "Both ETB + MTB"
                        ]
                    }
                ]
            },
            {
                "note": [
                    {
                        "type": "contentEditable",
                        "data": "Interdental cleaning: "
                    },
                    {
                        "type": "button",
                        "data": [
                            "Nil",
                            "Floss",
                            "Tepe",
                            "Floss and tepe"
                        ]
                    }
                ]
            },
            {
                "note": [
                    {
                        "type": "contentEditable",
                        "data": "Last check up: "
                    },
                    {
                        "type": "button",
                        "data": [
                            "6 months ago",
                            "12m ago",
                            "over 12m ago",
                            "over 2 years ago",
                            "over 5 years ago"
                        ]
                    }
                ]
            }
        ]
    },
    "Extra Oral Exam": {
        "index": 3,
        "notes": [
            {
                "note": [
                    {
                        "type": "contentEditable",
                        "data": "LN: Nil"
                    }
                ]
            },
            {
                "note": [
                    {
                        "type": "contentEditable",
                        "data": "MOM: Nil"
                    }
                ]
            },
            {
                "note": [
                    {
                        "type": "contentEditable",
                        "data": "SG: Nil"
                    }
                ]
            },
            {
                "note": [
                    {
                        "type": "contentEditable",
                        "data": "TMJ: "
                    },
                    {
                        "type": "button",
                        "data": [
                            "Nil",
                            "Clicking RHS",
                            "Clicking LHS",
                            "Clicking both sides"
                        ]
                    }
                ]
            },
            {
                "note": [
                    {
                        "type": "contentEditable",
                        "data": "Other:"
                    }
                ]
            }
        ],
        "linked": [
            {
                "update": "Extra Oral Exam",
                "ref": "Nil",
                "notes": [
                    {
                        "note": [
                            {
                                "type": "contentEditable",
                                "data": "somthing else"
                            }
                        ]
                    },
                    {
                        "note": [
                            {
                                "type": "contentEditable",
                                "data": "people are here"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "Intra Oral Exam ": {
        "index": 4,
        "notes": [
            {
                "note": [
                    {
                        "type": "contentEditable",
                        "data": "Tongue: "
                    },
                    {
                        "type": "button",
                        "data": [
                            "Nil",
                            "Crenated",
                            "Geographic"
                        ]
                    }
                ]
            },
            {
                "note": [
                    {
                        "type": "contentEditable",
                        "data": "FOM: Nil"
                    }
                ]
            },
            {
                "note": [
                    {
                        "type": "contentEditable",
                        "data": "Palate: Nil"
                    }
                ]
            },
            {
                "note": [
                    {
                        "type": "contentEditable",
                        "data": "Mucosa: "
                    },
                    {
                        "type": "button",
                        "data": [
                            "Nil",
                            "Linea Alba"
                        ]
                    }
                ]
            },
            {
                "note": [
                    {
                        "type": "contentEditable",
                        "data": "Gingivae: Nil"
                    }
                ]
            },
            {
                "note": [
                    {
                        "type": "contentEditable",
                        "data": "Signs of Xerostomia: "
                    },
                    {
                        "type": "button",
                        "data": [
                            "No",
                            "Yes"
                        ]
                    }
                ]
            },
            {
                "note": [
                    {
                        "type": "contentEditable",
                        "data": "BPE Recorded - see chart"
                    }
                ]
            },
            {
                "note": [
                    {
                        "type": "contentEditable",
                        "data": "Teeth charted"
                    }
                ]
            },
            {
                "note": [
                    {
                        "type": "contentEditable",
                        "data": "Oral Hygiene: "
                    },
                    {
                        "type": "button",
                        "data": [
                            "Good",
                            "Mod",
                            "Poor"
                        ]
                    }
                ]
            },
            {
                "note": [
                    {
                        "type": "contentEditable",
                        "data": "Other findings"
                    }
                ]
            }
        ]
    },
    "Radiographs": {
        "index": 5,
        "notes": [
            {
                "note": [
                    {
                        "type": "contentEditable",
                        "data": "Bite wing radiographs taken for Inter-proximal caries assessment and bone levels"
                    }
                ]
            },
            {
                "note": [
                    {
                        "type": "contentEditable",
                        "data": "Right hand side Grade: "
                    },
                    {
                        "type": "button",
                        "data": [
                            "1",
                            "2",
                            "3"
                        ]
                    }
                ]
            },
            {
                "note": [
                    {
                        "type": "contentEditable",
                        "data": "Bone levels: "
                    },
                    {
                        "type": "button",
                        "data": [
                            "Normal",
                            "Bone loss present"
                        ]
                    }
                ]
            },
            {
                "note": [
                    {
                        "type": "contentEditable",
                        "data": "Radio-lucencies: Nil"
                    }
                ]
            },
            {
                "note": [
                    {
                        "type": "contentEditable",
                        "data": "Deficient restorations: Nil"
                    }
                ]
            },
            {
                "note": [
                    {
                        "type": "contentEditable",
                        "data": "Overhangs: Nil"
                    }
                ]
            },
            {
                "note": [
                    {
                        "type": "contentEditable",
                        "data": "Other:"
                    }
                ]
            },
            {
                "note": [
                    {
                        "type": "contentEditable",
                        "data": "----"
                    }
                ]
            }
        ],
        "linked": [
            {
                "ref": "Bone loss present",
                "update": "Radiographs",
                "notes": [
                    {
                        "note": [
                            {
                                "type": "contentEditable",
                                "data": "Things have changed"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "Diagnosis": {
        "index": 6,
        "notes": [
            {
                "note": [
                    {
                        "type": "contentEditable",
                        "data": ""
                    }
                ]
            }
        ]
    },
    "Discussion": {
        "index": 7,
        "notes": [
            {
                "note": [
                    {
                        "type": "contentEditable",
                        "data": "Patient happy to see hygienist for calculus and stain removal, aware of private \u00a360 charge"
                    }
                ]
            }
        ]
    },
    "Risk assessment": {
        "index": 8,
        "notes": [
            {
                "note": [
                    {
                        "type": "contentEditable",
                        "data": "Caries risk: "
                    },
                    {
                        "type": "button",
                        "data": [
                            "Low",
                            "Med",
                            "High"
                        ]
                    }
                ]
            },
            {
                "note": [
                    {
                        "type": "contentEditable",
                        "data": "Periodontal risk: "
                    },
                    {
                        "type": "button",
                        "data": [
                            "Low",
                            "Med",
                            "High"
                        ]
                    }
                ]
            },
            {
                "note": [
                    {
                        "type": "contentEditable",
                        "data": "Wear risk: "
                    },
                    {
                        "type": "button",
                        "data": [
                            "Low",
                            "Med",
                            "high"
                        ]
                    }
                ]
            },
            {
                "note": [
                    {
                        "type": "contentEditable",
                        "data": "Oral Cancer risk: "
                    },
                    {
                        "type": "button",
                        "data": [
                            "Low",
                            "Med",
                            "High"
                        ]
                    }
                ]
            }
        ]
    },
    "Treatment Plan / recall": {
        "index": 9,
        "notes": [
            {
                "note": [
                    {
                        "type": "contentEditable",
                        "data": "OHI given: Brush twice a day with fluoride toothpaste, mouthwash at separate time of day, IP cleaning before brushing. Reduce sugar frequency "
                    }
                ]
            },
            {
                "note": [
                    {
                        "type": "contentEditable",
                        "data": "1"
                    }
                ]
            },
            {
                "note": [
                    {
                        "type": "contentEditable",
                        "data": "Recall: "
                    },
                    {
                        "type": "button",
                        "data": [
                            "3m",
                            "6m",
                            "9m",
                            "12m",
                            "24m"
                        ]
                    }
                ]
            },
            {
                "note": [
                    {
                        "type": "contentEditable",
                        "data": "Nurse: "
                    },
                    {
                        "type": "button",
                        "data": [
                            "Lisa Petruziello",
                            "Stephanie Georgiou",
                            "Ingrida Milkeviciene"
                        ]
                    }
                ]
            }
        ]
    }
}

const App = () => {
    return (
        <Editor template={template} />
    )
}

export default App;