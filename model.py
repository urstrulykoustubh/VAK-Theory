# Automated enhanced learning system with VAK learning style detection using Machine Learning
# Classification will be done on the basis of score recorded from the responses of the users.


import pandas as py
import sklearn as skl
# import matplotlib.pyplot as plt
import numpy as np
import sys
import scipy

df = py.read_csv("D:\Projects\Mini Project 1-20211119T061126Z-001\Mini Project 1\Vak.csv", header=0)
df.head()
df.info()

# X-Y split

X = df.loc[:, df.columns != "31"]
type(X)

X.head()
print("\nX Shape\n")
print(X.shape)

Y = df["31"]
type(Y)
Y.head()
print("\nY Shape\n")
print(Y.shape)

# Test-Train split
# 80% will be the training data and 20% will be the testing data

from sklearn.model_selection import train_test_split

X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.25, random_state=0)

X_train.head()
Y_train.head()
print("\nX_train Shape\n")
print(X_train.shape)
print("\nY_train Shape\n")
print(Y_train.shape)

X_test.head()
print("\nX_test.shape\n")
print(X_test.shape)

Y_test.head()
print("\nY_test.shape\n")
print(Y_test.shape)

# Training Model

from sklearn import svm

clf_svm_1 = svm.SVC()
clf_svm_1.fit(X_train, Y_train)

# Predict values using train model

y_train_pred = clf_svm_1.predict(X_train)
y_test_pred = clf_svm_1.predict(X_test)
print("\ny_test_pred\n")
print(y_test_pred)

# Model Performance

from sklearn.metrics import accuracy_score, confusion_matrix

confusion_matrix(Y_test, y_test_pred)

accuracy_score(Y_test, y_test_pred)

from sklearn.metrics import classification_report

print(accuracy_score(Y_test, y_test_pred))
print(confusion_matrix(Y_test, y_test_pred))
print(classification_report(Y_test, y_test_pred))
print()
print(clf_svm_1.n_support_)

# Gaussian NB

from sklearn.naive_bayes import GaussianNB

nb = GaussianNB()
nb.fit(X_train, Y_train)
predictions = nb.predict(X_test)

print(accuracy_score(Y_test, predictions))
print(confusion_matrix(Y_test, predictions))
print(classification_report(Y_test, predictions))

# LDA

from sklearn.discriminant_analysis import LinearDiscriminantAnalysis

lda = LinearDiscriminantAnalysis()
lda.fit(X_train, Y_train)
predictions = lda.predict(X_test)
print(accuracy_score(Y_test, predictions))
print(confusion_matrix(Y_test, predictions))
print(classification_report(Y_test, predictions))

# Testing for single data

# new_input = [[1,2,3,1,2,3,1,1,1,1,1,1,1,1,3,2,1,1,1,1,1,1,1,1,1,1,1,2,2,1]]

