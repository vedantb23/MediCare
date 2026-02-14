import pandas as pd
import joblib
import os
from sklearn.model_selection import StratifiedShuffleSplit
from sklearn.pipeline import Pipeline
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
from sklearn.model_selection import cross_val_score
import sklearn
print("Train sklearn version:", sklearn.__version__)

# 1. Load Dataset
# print("os.getcwd()=>" ,os.getcwd())
DATA_PATH = "../data/doctor_specialization_dataset_100k.csv"
MODEL_FILE = "../models/doctor_specialization_pipeline.pkl"


if not os.path.exists(MODEL_FILE):
    df = pd.read_csv(DATA_PATH)

    X = df["symptoms"]
    y = df["specialization"]


    # 2. Stratified Split


    split = StratifiedShuffleSplit(n_splits=1, test_size=0.2, random_state=42)

    for train_index, test_index in split.split(X, y):
        X_train = X.iloc[train_index]
        X_test = X.iloc[test_index]
        y_train = y.iloc[train_index]
        y_test = y.iloc[test_index]


    # 3. Build Pipeline


    model = Pipeline([
        ("tfidf", TfidfVectorizer(
            lowercase=True,
            stop_words="english",
            max_features=10000
        )),
        ("clf", LogisticRegression())
    ])


    # 4. Train Model


    print("Running 5-fold cross-validation...")
    cv_scores = cross_val_score(model, X, y, cv=5, scoring="accuracy")
    print("Cross-validation accuracy:", cv_scores.mean())

    print("\nTraining model...")
    model.fit(X_train, y_train)


    # 5. Evaluate Model

    print("Evaluating model...")
    y_pred = model.predict(X_test)

    accuracy = accuracy_score(y_test, y_pred)

    print("Accuracy:", accuracy)
    print("Classification Report:\n")
    print(classification_report(y_test, y_pred))
    print("Confusion Matrix:\n")
    print(confusion_matrix(y_test, y_pred))


    # 6. Save Model


    MODEL_PATH = "../models/doctor_specialization_pipeline.pkl"

    joblib.dump(model, MODEL_PATH)

    print("Model saved to:", MODEL_PATH)


else:
    print("Model already exists. Skipping training.")