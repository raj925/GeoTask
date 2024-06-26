let scenarios2 = [
  {
    "ID": 1,
  	"True Condition": "Temporal Arteritis",
    "Prompt": "Patient is a 68 year old male presenting with fever and arthralgia.",
    "Suspected": "Your colleague has been handling the patient with a working hypothesis of Temporal Arteritis.",
    "Patient History": {
    	"Present Illness History": {
            "Output": "The patient was well until 4 weeks prior to admission when he developed arthralgia in his wrists and shoulders. He also developed fatigue. He began taking ibuprofen, but developed abdominal pain. OGD (Oesophago-gastro-duodenoscopy) showed several gastric ulcers. One week prior to admission, the arthralgia again worsened, and he developed fever and headache.",
            "Duration": 40
        },
    	"Past Medical History": {
            "Output": "No prior illnesses or hospitalizations.",
            "Duration": 60
        },
    	"Medication": {
            "Output": "Ranitidine.",
            "Duration": 20
        },
    	"Allergies": {
            "Output": "None Known",
            "Duration": 45
        },
    	"Family History": {
            "Output": "Noncontributory",
            "Duration": 30
        },
    	"Social History": {
            "Output": "He is divorced, and lives alone. He denied tobacco, alcohol, or illicit drug use.",
            "Duration": 30
        }
    },
    "Physical Examination": {
    	"Take Pulse": {
            "Output": "120 regular",
            "Duration": 1200
        },
        "Measure Blood Pressure": {
            "Output": "110/60 mmHG",
            "Duration": 300
        },
        "Assess Respiratory Rate": {
            "Output": "20/min",
            "Duration": 900
        },
        "Auscultate Lungs": {
            "Output": "The lungs are clear.",
            "Duration": 0
        },
        "Auscultate the Heart": {
            "Output": "Normal heart sounds, no gallop, and no murmurs.",
            "Duration": 1500
        },
        "Assess Eyes": {
            "Output": "The conjunctivae were pale. The sclerae were anicteric. The pupils were equal, round, and reactive to light and accommodation. The fundi were normal.",
            "Duration": 1800
        },
        "Measure Temperature": {
            "Output": "38.9 degrees celsius",
            "Duration": 800
        },
        "Abdomen Examination": {
            "Output": "The abdomen was soft, without tenderness. There was no hepatosplenomegaly or masses.",
            "Duration": 400
        },
        "Rectal Examination": {
            "Output": "Rectal examination was normal; the stool was negative for occult blood.",
            "Duration": 900
        },
        "Neck/Throat Examination": {
            "Output": "The oropharynx was normal. The neck was supple. There was no lymphadenopathy or thyromegaly.",
            "Duration": 300
        },
        "Assess Head": {
            "Output": "Evidence of bitemporal wasting. Scalp feels tender.",
            "Duration": 200
        },
        "Neurologic Exam Record": {
            "Output": "The neurological exam including mental status, cranial nerves, strength and sensation was normal.",
            "Duration": 400
        },
        "Assess Extremities": {
            "Output": "The extremities showed no joint swelling; there was pain in the shoulders on abduction to 90 degrees. There was no cyanosis, clubbing, or oedema.",
            "Duration": 400
        },
    },
    "Testing": {
        "Urine Dipstick": {
            "Output": "No protein or blood; microscopic examination normal.",
            "Duration": 200
        },
        "ECG": {
            "Output": "Sinus tachycardia, but was otherwise normal.",
            "Duration": 200
        },
        "Abdominal CT Scan": {
            "Output": "Unremarkable",
            "Duration": 400
        },
        "Venous Blood Gas": {
            "Output": "pH: 7.34 (Normal: 7.33 to 7.44), PCO2: 5.6 (Normal: 5 to 6.4kPa), PO2: 6.0  (Normal: > 5.3 kPa), HCO3: 24 (Normal: 22 to 28 mmol/L), Base Excess: +1 (Normal: -/+2), Saturation: 73 (Normal: 72 to 75%), Lactate: 1.6 (Normal: 0.5 to 2.2  mmol/L)",
            "Duration": 20
        },
        "UREA and Electrolytes": {
            "Output": "Sodium: 139 (Normal: 135 to 145 mmol/L), Potassium: 4.4 (Normal: 3.5 to 5.0 mmol/L), Urea: 5.1 (Normal: 2.5 to 6.7 mmol/L), Creatinine: 88 (Normal: 70 to 150 micromol/L), eGFR: >90 (Normal: >90ml/min/1.73m2)",
            "Duration": 200
        },
        "CRP and ESR": {
            "Output": "ESR: 30mm/hr (Normal: 0 to 12), CRP: 22mm/hr (Normal: 0 to 10)",
            "Duration": 200
        },
        "Clotting Test": {
            "Output": "Prothrombin Time: 11 (Normal: 10 to 14 seconds), APTT: 30 (Normal: 22 to 36 seconds), Fibrinogen: 2.9 (Normal: 1.5 to 4.5 g/L)",
            "Duration": 20
        },
        "FBC": {
            "Output": "Hb: 93 (Normal: 130 to 180 g/L), Hct: 0.28 (Normal: 0.40 to 0.54 L/L), MCV: 73.9 (Normal: 80 to 100 fl), WBC: 9.2 (Normal: 3.6 to 11.0 x 109/L), Neut: 7.6 (Normal: 1.8 to 7.5  x 109/L), Lymph's: 1.4 (Normal: 1.0 to 4.0  x 109/L), Platelet Count: 490 (Normal: 140 to 400 x 109/L)",
            "Duration": 500
        },
        "Other Biochemistry Tests": {
            "Output": "Chloride: 101 (Normal: 95 to 105 mmol/l), Glucose: 5.1 (Normal: 3.5 to 5.5 mmol/L), Protein Total: 66 (Normal: 60 to 80 g/L), Albumin: 22 (Normal: 36 to 50 g/L), AST (SGOT): 35 (Normal: 5 to 35 U/L), ALP: 97 (Normal: 30 to 150 U/L)",
            "Duration": 20
        },
        "Chest X-Ray": {
            "Output": "Normal heart and lungs",
            "Duration": 20
        }
    }

   },
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
    {
    "ID": 2,
    "True Condition": "Ulcerative Colitis",
    "Prompt": "Patient is a 60 year old male presented with 2 day history of bloody diarrhoea.",
    "Suspected": "Your colleague has been handling the patient with a working hypothesis of Ulcerative Colitis.",
    "Patient History": {
        "Present Illness History": {
            "Output": "The patient has a history of hypertension, osteoarthritis and diverticulitis. He had been doing well until about three weeks prior to admission, when he developed loose, watery bowel movements and an associated crampy left lower quadrant abdominal pain. The bowel movements occurred about 4-5 times per day. Prior to admission, he noted blood in his bowel movements, as well as fevers to 39 degrees celsius, chills and sweats. He did note fatigue and a decrease in weight of 14 pounds relative to his baseline.",
            "Duration": 40
        },
        "Past Medical History": {
            "Output": "Significant for diverticulitis: diagnosed first in 1999 after a presentation with fresh blood in stool, relatively asymptomatic recently, hypertension, osteoarthritis in his hands, and recurrent epistaxis.",
            "Duration": 60
        },
        "Medication": {
            "Output": "Diltiazem and hydrochlorothiazide, neither started recently.",
            "Duration": 20
        },
        "Allergies": {
            "Output": "None Known",
            "Duration": 45
        },
        "Family History": {
            "Output": "Negative for colonic disease",
            "Duration": 30
        },
        "Social History": {
            "Output": "Unremarkable.",
            "Duration": 30
        }
    },
    "Physical Examination": {
        "Take Pulse": {
            "Output": "90 regular",
            "Duration": 1200
        },
        "Measure Blood Pressure": {
            "Output": "132/68 mmHG",
            "Duration": 300
        },
        "Assess Respiratory Rate": {
            "Output": "25/min",
            "Duration": 900
        },
        "Auscultate Lungs": {
            "Output": "Lungs were clear to auscultation.",
            "Duration": 0
        },
        "Auscultate the Heart": {
            "Output": "His cardiac rhythm was regular and no extra heart sounds or murmurs were appreciated.",
            "Duration": 1500
        },
        "Assess Eyes": {
            "Output": "Conjunctivae were pale. The pupils were equal, round, and reactive to light and accommodation.",
            "Duration": 1800
        },
        "Measure Temperature": {
            "Output": "38.5 degrees celsius",
            "Duration": 800
        },
        "Abdomen Examination": {
            "Output": "His abdominal examination revealed bowel sounds and mild tenderness to palpation over the left lower quadrant without rebound or guarding. No masses or organomegaly were present.",
            "Duration": 400
        },
        "Rectal Examination": {
            "Output": "Rectal examination revealed no palpable masses or obvious haemorrhoids. The stool was grossly bloody.",
            "Duration": 900
        },
        "Neck/Throat Examination": {
            "Output": "The neck and oropharynx were normal.",
            "Duration": 300
        },
        "Assess Head": {
            "Output": "Normal",
            "Duration": 200
        },
        "Neurologic Exam Record": {
            "Output": "Neurological examination was normal.",
            "Duration": 400
        },
        "Assess Extremities": {
            "Output": "Nails were pale. Distal and radial pulses were equal.",
            "Duration": 400
        },
    },
    "Testing": {
        "Urine Dipstick": {
            "Output": "Trace leukocytes in dipstick and occasional WBC on microscopic examination.",
            "Duration": 200
        },
        "ECG": {
            "Output": "Sinus tachycardia, but was otherwise normal.",
            "Duration": 200
        },
        "Abdominal CT Scan": {
            "Output": "Widespread inflammation/colitis",
            "Duration": 400
        },
        "Venous Blood Gas": {
            "Output": "pH: 7.39 (Normal: 7.33 to 7.44), PCO2: 5.6 (Normal: 5 to 6.4kPa), PO2: 5.7 (Normal: >5.3 kPa), HCO3: 28 (Normal: 22 to 28 mmol/L), Base Excess: +1 (Normal: -/+2), Saturation: 74 (Normal: 72 to 75%), Lactate: 0.9 (Normal: 0.5 to 2.2  mmol/L)",
            "Duration": 20
        },
        "UREA and Electrolytes": {
            "Output": "Sodium: 125 (Normal: 135 to 145 mmol/L), Potassium: 2.9 (Normal: 3.5 to 5.0 mmol/L), Urea: 8.7 (Normal: 2.5 to 6.7 mmol/L), Creatinine: 89 (Normal: 70 to 150 micromol/L), eGFR: >90 (Normal: >90ml/min/1.73m2)",
            "Duration": 200
        },
        "CRP and ESR": {
            "Output": "ESR: 35mm/hr (Normal: 0 to 12), CRP: 17mm/hr (Normal: 0 to 10)",
            "Duration": 200
        },
        "Clotting Test": {
            "Output": "Prothrombin Time: 12 (Normal: 10 to 14 seconds), APTT: 28 (Normal: 22 to 36 seconds), Fibrinogen: 3.6 (Normal: 1.5 to 4.5 g/L)",
            "Duration": 20
        },
        "FBC": {
            "Output": "Hb: 50 (Normal: 130 to 180 g/L), Hct: 0.37 (Normal: 0.40 to 0.54 L/L), MCV: 55.4 (Normal: 80 to 100 fl), WBC: 7.9 (Normal: 3.6 to 11.0 x 109/L), Neut: 7.7 (Normal: 1.8 to 7.5  x 109/L), Lymph's: 0.7 (Normal: 1.0 to 4.0  x 109/L), Platelet Count: 273 (Normal: 140 to 400 x 109/L)",
            "Duration": 500
        },
        "Other Biochemistry Tests": {
            "Output": "Chloride: 91 (Normal: 95 to 105 mmol/l), Glucose: 6.2 (Normal: 3.5 to 5.5 mmol/L), Protein Total: 57 (Normal: 60 to 80 g/L), Albumin: 31 (Normal: 36 to 50 g/L), AST (SGOT): 42 (Normal: 5 to 35 U/L), ALP - 98 (Normal: 30-150 U/L)",
            "Duration": 20
        },
        "Chest X-Ray": {
            "Output": "Chronic bilateral pleural scarring.",
            "Duration": 20
        }
    }
   },
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
    {
    "ID": 3,
    "True Condition": "Miliary TB",
    "Prompt": "Patient is a 62 year old male admitted for fevers and generalised weakness.",
    "Suspected": "Your colleague has been handling the patient with a working hypothesis of Miliary TB.",
    "Patient History": {
        "Present Illness History": {
            "Output": "Ten years prior to admission, the patient developed pancytopenia. Evaluation included a bone marrow biopsy which revealed refractory anaemia. The patient's myelodysplastic syndrome remained indolent throughout the subsequent 10 years. Three months prior to admission the patient developed daily fevers and fatigue. One month prior to admission the patient presented to an outside hospital for diagnostic evaluation. Examination revealed a high temperature, a right inguinal hernia, and a right axillary mass (3 cm in diameter, no fluctuance, slightly tender).",
            "Duration": 40
        },
        "Past Medical History": {
            "Output": "Myelodysplastic syndrome, Type II Diabetes (10 years, dietcontrolled), hypertension (10 years).",
            "Duration": 60
        },
        "Medication": {
            "Output": "G-CSF (Granulocyte Colony Stimulating Factor), verapamil, Fybogel",
            "Duration": 20
        },
        "Allergies": {
            "Output": "None Known",
            "Duration": 45
        },
        "Family History": {
            "Output": "Non-contributory",
            "Duration": 30
        },
        "Social History": {
            "Output": "Regular (daily) smoker, has not travelled recently.",
            "Duration": 30
        }
    },
    "Physical Examination": {
        "Take Pulse": {
            "Output": "100 regular",
            "Duration": 1200
        },
        "Measure Blood Pressure": {
            "Output": "150/70 mmHG",
            "Duration": 300
        },
        "Assess Respiratory Rate": {
            "Output": "18/min",
            "Duration": 900
        },
        "Auscultate Lungs": {
            "Output": "Lungs exam revealed decreased breath sounds at right base with dullness to percussion. Crackles on the right and left lower zones, and crackles on the right middle zone.",
            "Duration": 0
        },
        "Auscultate the Heart": {
            "Output": "Cardiovascular system was within normal limits.",
            "Duration": 1500
        },
        "Assess Eyes": {
            "Output": "The pupils were equal, round, and reactive to light and accommodation.",
            "Duration": 1800
        },
        "Measure Temperature": {
            "Output": "39.0 degrees celsius",
            "Duration": 800
        },
        "Abdomen Examination": {
            "Output": "Abdomen was distended, with shifting dullness, a right inguinal hernia (reducible), and normal bowel sounds.",
            "Duration": 400
        },
        "Rectal Examination": {
            "Output": "Rectal exam was unremarkable.",
            "Duration": 900
        },
        "Neck/Throat Examination": {
            "Output": "Within normal limits",
            "Duration": 300
        },
        "Assess Head": {
            "Output": "No irregularities.",
            "Duration": 200
        },
        "Neurologic Exam Record": {
            "Output": "Within normal limits.",
            "Duration": 400
        },
        "Assess Extremities": {
            "Output": "Mild pedal oedema, multiple ecchymoses of various sizes.",
            "Duration": 400
        },
    },
    "Testing": {
        "Urine Dipstick": {
            "Output": "Specific gravity 1.020 (normal: 1.005 to 1.025), 3 to 5 RBC (normal: <3 RBC) 0 to 3 WBC, no casts.",
            "Duration": 200
        },
        "ECG": {
            "Output": "No irregularities",
            "Duration": 200
        },
        "Abdominal CT Scan": {
            "Output": "Questionable ascites",
            "Duration": 400
        },
        "Venous Blood Gas": {
            "Output": "pH: 7.47 (Normal: 7.33 to 7.44), PCO2: 6.1 (Normal: 5 to 6.4kPa), PO2: 6.1 (Normal: > 5.3 kPa), HCO3: 27 (Normal: 22 to 28 mmol/L), Base Excess: +1 (Normal: -/+2), Saturation: 72 (Normal: 72 to 75%), Lactate: 1.2 (Normal: 0.5 to 2.2  mmol/L)",
            "Duration": 20
        },
        "UREA and Electrolytes": {
            "Output": "Sodium: 129 (Normal: 135 to 145 mmol/L), Potassium: 3.5 (Normal: 3.5 to 5.0 mmol/L), Urea: 5.5 (Normal: 2.5 to 6.7 mmol/L), Creatinine: 145 (Normal: 70 to 150 micromol/L), eGFR: 42.8 (Normal: >90ml/min/1.73m2)",
            "Duration": 200
        },
        "CRP and ESR": {
            "Output": "ESR: 35mm/hr (Normal: 0 to 12), CRP: 17mm/hr (Normal: 0 to 10)",
            "Duration": 200
        },
        "Clotting Test": {
            "Output": "Prothrombin Time: 11 (Normal: 10 to 14 seconds), APTT: 23 (Normal: 22 to 36 seconds), Fibrinogen: 2.2 (Normal: 1.5 to 4.5 g/L)",
            "Duration": 20
        },
        "FBC": {
            "Output": "Hb: 94 (Normal: 130 to 180 g/L), Hct: 0.28 (Normal: 0.40 to 0.54 L/L), MCV: 87 (Normal: 80 to 100 fl), WBC: 6.3 (Normal: 3.6 to 11.0 x 109/L), Neut: 5.5 (Normal: 1.8 to 7.5  x 109/L), Lymph's: 0.6 (Normal: 1.0 to 4.0  x 109/L), Platelet Count: 85 (Normal: 140 to 400 x 109/L)",
            "Duration": 500
        },
        "Other Biochemistry Tests": {
            "Output": "Chloride: 90 (Normal: 95 to 105 mmol/l), Glucose: 8.5 (Normal: 3.5 to 5.5 mmol/L), Protein Total: 66 (Normal: 60 to 80 g/L), Albumin: 29 (Normal: 36 to 50 g/L), AST (SGOT): 49 (Normal: 5 to 35 U/L), ALP: 151 (Normal: 30 to 150 U/L)",
            "Duration": 20
        },
        "Chest X-Ray": {
            "Output": "Right pleural effusion, layers on lateral x-ray.",
            "Duration": 20
        }
    }
   },
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
    {
    "ID": 4,
    "True Condition": "Aortic Dissection",
    "Prompt": "Patient is a 58 year old female presented with shortness of breath.",
    "Suspected": "Your colleague has been handling the patient with a working hypothesis of Aortic Dissection.",
    "Patient History": {
        "Present Illness History": {
            "Output": "The patient had a history of hypertension and had had three weeks of intermittent left sided chest pain. The pain radiated to the back. There was no change with exertion. Pains lasted for approximately one minute. She also complained of increasing shortness of breath over the previous month. She became dyspneic performing minimum household chores. She had an occasional nonproductive cough. She had been seen by a GP prior to admission, found to be hypertensive and started on treatment. She complained of night sweats and fever over the previous week but had no weight loss.",
            "Duration": 40
        },
        "Past Medical History": {
            "Output": "She had previous trauma to the right eye resulting in blindness. She had a total abdominal hysterectomy and bilateral oophorectomy in the 1990's.",
            "Duration": 60
        },
        "Medication": {
            "Output": "Her medications on admission included verapamil 180 mg once per day, ramipril 5 mg once per day, and furosemide 20 mg once per day",
            "Duration": 20
        },
        "Allergies": {
            "Output": "None Known",
            "Duration": 45
        },
        "Family History": {
            "Output": "Unremarkable",
            "Duration": 30
        },
        "Social History": {
            "Output": "She smoked for ten years, but stopped twenty years ago. She drinks one bottle of beer every six months. She works in the home and lives with her husband.",
            "Duration": 30
        }
    },
    "Physical Examination": {
        "Take Pulse": {
            "Output": "90 regular",
            "Duration": 1200
        },
        "Measure Blood Pressure": {
            "Output": "159/107 mmHG",
            "Duration": 300
        },
        "Assess Respiratory Rate": {
            "Output": "22/min",
            "Duration": 900
        },
        "Auscultate Lungs": {
            "Output": "The lungs were clear to auscultation and percussion.",
            "Duration": 0
        },
        "Auscultate the Heart": {
            "Output": "The first and second heart sounds were normal. There was an S4 and a II/VI systolic ejection murmur.",
            "Duration": 1500
        },
        "Assess Eyes": {
            "Output": "Her pupils were equally round and reactive to light. The right cornea was opacified.",
            "Duration": 1800
        },
        "Measure Temperature": {
            "Output": "38.3 degrees celsius",
            "Duration": 800
        },
        "Abdomen Examination": {
            "Output": "The abdomen was soft and non-tender with no masses, or organomegaly.",
            "Duration": 400
        },
        "Rectal Examination": {
            "Output": "NAD and faecal occult blood was negative.",
            "Duration": 900
        },
        "Neck/Throat Examination": {
            "Output": "There was no thyromegaly or adenopathy. Jugular venous pulsations were visible at 8 cm.",
            "Duration": 300
        },
        "Assess Head": {
            "Output": "Normal.",
            "Duration": 200
        },
        "Neurologic Exam Record": {
            "Output": "Neurologic exam was normal.",
            "Duration": 400
        },
        "Assess Extremities": {
            "Output": "No cyanosis or edema.  Radial femoral delay to pulses, unequal.",
            "Duration": 400
        },
    },
    "Testing": {
        "Urine Dipstick": {
            "Output": "Trace protein, no blood, 1+ nitrites. 3 to 7 WBC's, no RBC's, 10 to 15 squamous epithelial cells, and 3+ bacteria.",
            "Duration": 200
        },
        "ECG": {
            "Output": "Small Q waves in the inferior leads. No ST segment or T wave abnormalities. Voltage within normal limits.",
            "Duration": 200
        },
        "Abdominal CT Scan": {
            "Output": "Normal",
            "Duration": 400
        },
        "Venous Blood Gas": {
            "Output": "pH: 7.36 (Normal: 7.33 to 7.44), PCO2: 5.7 (Normal: 5 to 6.4kPa), PO2: 5.9 (Normal: > 5.3 kPa), HCO3: 23 (Normal: 22 to 28 mmol/L), Base Excess: +1 (Normal: -/+2), Saturation: 74 (Normal: 72 to 75%), Lactate: 1.6 (Normal: 0.5 to 2.2 mmol/L)",
            "Duration": 20
        },
        "UREA and Electrolytes": {
            "Output": "Sodium: 142 (Normal: 135 to 145 mmol/L), Potassium: 3.9 (Normal: 3.5 to 5.0 mmol/L), Urea: 5.5 (Normal: 2.5 to 6.7 mmol/L), Creatinine: 102 (Normal: 70 to 150 micromol/L), eGFR: 58.5 (Normal: >90ml/min/1.73m2)",
            "Duration": 200
        },
        "CRP and ESR": {
            "Output": "ESR: 9mm/hr (Normal: 0 to 12), CRP: 8mm/hr (Normal: 0 to 10)",
            "Duration": 200
        },
        "Clotting Test": {
            "Output": "Prothrombin Time: 11 (Normal: 10 to 14 seconds), APTT: 23 (Normal: 22 to 36 seconds), Fibrinogen: 2.2 (Normal: 1.5 to 4.5 g/L)",
            "Duration": 20
        },
        "FBC": {
            "Output": "Hb: 87 (Normal: 130 to 180 g/L), Hct: 0.28 (Normal: 0.40 to 0.54 L/L), MCV: 76 (Normal: 80 to 100 fl), WBC: 8.1 (Normal: 3.6 to 11.0 x 109/L), Neut: 7.4 (Normal: 1.8 to 7.5  x 109/L), Lymph's: 0.8 (Normal: 1.0 to 4.0  x 109/L), Platelet Count: 472 (Normal: 140 to 400 x 109/L)",
            "Duration": 500
        },
        "Other Biochemistry Tests": {
            "Output": "Chloride: 99 (Normal: 95 to 105 mmol/l), Glucose: 5.7 (Normal: 3.5 to 5.5 mmol/L), Protein Total: 63 (Normal: 60 to 80 g/L), Albumin: 31 (Normal: 36 to 50 g/L), AST (SGOT): 116 (Normal: 5 to 35 U/L), ALP: 168 (Normal: 30 to 150 U/L)",
            "Duration": 20
        },
        "Chest X-Ray": {
            "Output": "Globular cardiomegaly with small left pleural effusion and subsegmental atelectasis or scarring in the right costophrenic angle. Loculated fissural fluid in the left mid lung zone.",
            "Duration": 20
        }
    }
   },
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
    {
    "ID": 5,
    "True Condition": "Guillain-Barre Syndrome",
    "Prompt": "Patient is a 67 year old male presented with weakness of the legs for 24 hours.",
    "Suspected": "Your colleague has been handling the patient with a working hypothesis of Guillain-Barre Syndrome",
    "Patient History": {
        "Present Illness History": {
            "Output": "He was in his usual state of good health until the day prior to admission, when he noted weakness and stiffness of his arms and legs. When he awoke the day of admission, he found he could not sit up or move his legs. He denied headache, visual disturbances, difficulty swallowing, pain in his extremities, or difficulty urinating.",
            "Duration": 40
        },
        "Past Medical History": {
            "Output": "No prior illnesses or hospitalisations.",
            "Duration": 60
        },
        "Medication": {
            "Output": "None",
            "Duration": 20
        },
        "Allergies": {
            "Output": "None Known",
            "Duration": 45
        },
        "Family History": {
            "Output": "Nil of note",
            "Duration": 30
        },
        "Social History": {
            "Output": "He is married and lives with his wife. He denied use of tobacco, alcohol, or illicit drugs.",
            "Duration": 30
        }
    },
    "Physical Examination": {
        "Take Pulse": {
            "Output": "60 regular",
            "Duration": 1200
        },
        "Measure Blood Pressure": {
            "Output": "140/90 mmHG",
            "Duration": 300
        },
        "Assess Respiratory Rate": {
            "Output": "16/min",
            "Duration": 900
        },
        "Auscultate Lungs": {
            "Output": "Lungs were clear to auscultation and percussion.",
            "Duration": 0
        },
        "Auscultate the Heart": {
            "Output": "Cardiac examination revealed normal heart sounds, without gallops or murmurs",
            "Duration": 1500
        },
        "Assess Eyes": {
            "Output": "The conjunctivae were pink. The sclerae were anicteric. The pupils were equal, round, and reactive to light and accommodation.",
            "Duration": 1800
        },
        "Measure Temperature": {
            "Output": "38.5 degrees celsius",
            "Duration": 800
        },
        "Abdomen Examination": {
            "Output": "The abdomen was soft, with normoactive bowel sounds. There was no tenderness, hepatosplenomegaly, or masses.",
            "Duration": 400
        },
        "Rectal Examination": {
            "Output": "Rectal examination was normal",
            "Duration": 900
        },
        "Neck/Throat Examination": {
            "Output": "The oropharynx and neck were normal. There was no lymphadenopathy or thyromegaly.",
            "Duration": 300
        },
        "Assess Head": {
            "Output": "The head was normal with no evidence of trauma. Cranial nerves II - XII were intact.",
            "Duration": 200
        },
        "Neurologic Exam Record": {
            "Output": "Lower limbs: Reduced tone, reduced power, reduced coordination, reduced reflexes, normal sensation. Upper limbs normal.",
            "Duration": 400
        },
        "Assess Extremities": {
            "Output": "The extremities showed no cyanosis, clubbing, or edema; peripheral pulses were normal.",
            "Duration": 400
        },
    },
    "Testing": {
        "Urine Dipstick": {
            "Output": "No protein or blood; microscopic examination normal.",
            "Duration": 200
        },
        "ECG": {
            "Output": "Normal",
            "Duration": 200
        },
        "Abdominal CT Scan": {
            "Output": "Normal",
            "Duration": 400
        },
        "Venous Blood Gas": {
            "Output": "pH: 7.47 (Normal: 7.33 to 7.44), PCO2: 5 (Normal: 5 to 6.4kPa), PO2: 7.8 (Normal: > 5.3 kPa), HCO3: 26 (Normal: 22 to 28 mmol/L), Base Excess: +1 (Normal: -/+2), Saturation: 71 (Normal: 72 to 75%), Lactate: 2.0 (Normal: 0.5 to 2.2 mmol/L)",
            "Duration": 20
        },
        "UREA and Electrolytes": {
            "Output": "Sodium: 141 (Normal: 135 to 145 mmol/L), Potassium: 4.2 (Normal: 3.5 to 5.0 mmol/L), Urea: 6.0 (Normal: 2.5 to 6.7 mmol/L), Creatinine: 110 (Normal: 70 to 150 micromol/L), eGFR: 63 (Normal: >90ml/min/1.73m2)",
            "Duration": 200
        },
        "CRP and ESR": {
            "Output": "ESR: 6mm/hr (Normal: 0 to 12), CRP: 5mm/hr (Normal: 0 to 10)",
            "Duration": 200
        },
        "Clotting Test": {
            "Output": "Prothrombin Time: 13 (Normal: 10 to 14 seconds), APTT: 25 (Normal: 22 to 36 seconds), Fibrinogen: 3.7 (Normal: 1.5 to 4.5 g/L)",
            "Duration": 20
        },
        "FBC": {
            "Output": "Hb: 116 (Normal: 130 to 180 g/L), Hct: 0.35 (Normal: 0.40 to 0.54 L/L), MCV: 93 (Normal: 80 to 100 fl), WBC: 8.4 (Normal: 3.6 to 11.0 x 109/L), Neut: 4.8 (Normal: 1.8 to 7.5  x 109/L), Lymph's: 2.1 (Normal: 1.0 to 4.0 x 109/L), Platelet Count: 298 (Normal: 140 to 400 x 109/L)",
            "Duration": 500
        },
        "Other Biochemistry Tests": {
            "Output": "Chloride: 100 (Normal: 95 to 105 mmol/l), Glucose: 4.3 (Normal: 3.5 to 5.5 mmol/L), Protein Total: 72 (Normal: 60 to 80 g/L), Albumin: 41 (Normal: 36 to 50 g/L), AST (SGOT): 28 (Normal: 5 to 35 U/L), ALP: 64 (Normal: 30 to 150 U/L)",
            "Duration": 20
        },
        "Chest X-Ray": {
            "Output": "No irregularities",
            "Duration": 20
        }
    }
   },
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
    {
    "ID": 6,
    "True Condition": "Thrombotic Thrombocytopenic Purpura",
    "Prompt": "Patient is a 20 year old male was admitted from an outside hospital with complaints of a headache and slurred speech.",
    "Suspected": "Your colleague has been handling the patient with a working hypothesis of Thrombotic Thrombocytopenic Purpura",
    "Patient History": {
        "Present Illness History": {
            "Output": "This previously healthy patient was transferred from an outlying hospital after presenting with a one day history of occipital headaches and slurred speech. The headache began the day prior to admission and the patient felt well enough to visit his girlfriend that night. His girlfriend noted the onset of slurred speech and weakness in the patient's right arm. She took him to the local emergency room. The patient complained of fever, feelings of faintness and occasional chills.",
            "Duration": 40
        },
        "Past Medical History": {
            "Output": "No prior illnesses or hospitalisations.",
            "Duration": 60
        },
        "Medication": {
            "Output": "None",
            "Duration": 20
        },
        "Allergies": {
            "Output": "None Known",
            "Duration": 45
        },
        "Family History": {
            "Output": "Nil of note",
            "Duration": 30
        },
        "Social History": {
            "Output": "The patient smokes occasional marijuana.",
            "Duration": 30
        }
    },
    "Physical Examination": {
        "Take Pulse": {
            "Output": "96 regular",
            "Duration": 1200
        },
        "Measure Blood Pressure": {
            "Output": "150/78 mmHG",
            "Duration": 300
        },
        "Assess Respiratory Rate": {
            "Output": "24/min",
            "Duration": 900
        },
        "Auscultate Lungs": {
            "Output": "Lungs were clear to auscultation and percussion.",
            "Duration": 0
        },
        "Auscultate the Heart": {
            "Output": "There was a III/VI systolic ejection murmur at the left upper sternal border.",
            "Duration": 1500
        },
        "Assess Eyes": {
            "Output": "The pupils were equally round, reactive to light and accommodation.",
            "Duration": 1800
        },
        "Measure Temperature": {
            "Output": "38.1 degrees celsius",
            "Duration": 800
        },
        "Abdomen Examination": {
            "Output": "The abdomen was soft, nondistended, non-tender.",
            "Duration": 400
        },
        "Rectal Examination": {
            "Output": "Rectal examination was normal",
            "Duration": 900
        },
        "Neck/Throat Examination": {
            "Output": "The neck was normal; there was no thyromegaly or adenopathy. Oropharynx appeared normal.",
            "Duration": 300
        },
        "Assess Head": {
            "Output": "Normal with no evidence of trauma. Cranial nerves were intact.",
            "Duration": 200
        },
        "Neurologic Exam Record": {
            "Output": "Neurologic examination revealed that he was alert and oriented to person, place, and time.  Peripheral pulses were normal.",
            "Duration": 400
        },
        "Assess Extremities": {
            "Output": "The extremities showed no cyanosis, clubbing, or edema; The distal pulses were 2+ and equal bilaterally.",
            "Duration": 400
        },
    },
    "Testing": {
        "Urine Dipstick": {
            "Output": "3 to 8 WBCs, 3 to 10 RBCs, and 3 to 10 squamous epithelial cells per HPF. 1+ protein, and increased urobilinogen present.",
            "Duration": 200
        },
        "ECG": {
            "Output": "Normal",
            "Duration": 200
        },
        "Abdominal CT Scan": {
            "Output": "Normal",
            "Duration": 400
        },
        "Venous Blood Gas": {
            "Output": "pH: 7.35 (Normal: 7.33 to 7.44), PCO2: 5.2 (Normal: 5 to 6.4kPa), PO2: 5.9 (Normal: > 5.3 kPa), HCO3: 24 (Normal: 22 to 28 mmol/L), Base Excess: +1 (Normal: -/+2), Saturation: 75 (Normal: 72 to 75%), Lactate: 0.7 (Normal: 0.5 to 2.2 mmol/L)",
            "Duration": 20
        },
        "UREA and Electrolytes": {
            "Output": "Sodium: 141 (Normal: 135 to 145 mmol/L), Potassium: 4.2 (Normal: 3.5 to 5.0 mmol/L), Urea: 5.6 (Normal: 2.5 to 6.7 mmol/L), Creatinine: 135 (Normal: 70 to 150 micromol/L), eGFR: 70 (Normal: >90ml/min/1.73m2)",
            "Duration": 200
        },
        "CRP and ESR": {
            "Output": "ESR: 4mm/hr (Normal: 0 to 12), CRP: 7mm/hr (Normal: 0 to 10)",
            "Duration": 200
        },
        "Clotting Test": {
            "Output": "Prothrombin Time: 12 (Normal: 10 to 14 seconds), APTT: 28 (Normal: 22 to 36 seconds), Fibrinogen: 4.1 (Normal: 1.5 to 4.5 g/L)",
            "Duration": 20
        },
        "FBC": {
            "Output": "Hb: 74 (Normal: 130 to 180 g/L), Hct: 0.22 (Normal: 0.40 to 0.54 L/L), MCV: 100 (Normal: 80 to 100 fl), WBC: 8.4 (Normal: 3.6 to 11.0 x 109/L), Neut: 7.2 (Normal: 1.8 to 7.5  x 109/L), Lymph's: 3.1 (Normal: 1.0 to 4.0  x 109/L), Platelet Count: 25 (Normal: 140 to 400 x 109/L)",
            "Duration": 500
        },
        "Other Biochemistry Tests": {
            "Output": "Chloride: 103 (Normal: 95 to 105 mmol/l), Glucose: 4.7 (Normal: 3.5 to 5.5 mmol/L), Protein Total: 69 (Normal: 60 to 80 g/L), Albumin: 43 (Normal: 36 to 50 g/L), AST (SGOT): 51 (Normal: 5 to 35 U/L), ALP: 72 (Normal: 30 to 150 U/L)",
            "Duration": 20
        },
        "Chest X-Ray": {
            "Output": "No irregularities",
            "Duration": 20
        }
    }
   }
]

let diagnoses = [
"Unstable Ventricular Tachycardia",
"Stable Ventricular Tachycardia",
"Tachyarrhythmia Absoluta in Atrial Fibrillation",
"Pulmonary Artery Embolism",
"Acute Exacerbated COPD",
"Hypertensive Pulonary Edema",
"Pnemonia",
"Opiate Overdose",
"Spontaneous Pneumothorax",
"Aspiration",
"Paroxysmal Supraventricular Tachycardia",
"Anaphylaxis",
"Posterior Myocardial Infarction",
"Endocarditis",
"AV Block III",
"Thoracic Aortic Aneurysm",
"Subarachniodal Hemorrhage",
"Apoplectic Insult",
"Intracerebral Hemorrhage",
"Hypoglycemic Shock"
]

