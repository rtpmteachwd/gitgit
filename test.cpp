#include <iostream>
#include <string>
using namespace std;

// Define a structure for representing a student
struct Student {
    string name;
    int age;
    char gender;
    float grade;
};

int main() {
    // Declare a variable of type Student
    Student student1;

    // Input student information
    cout << "Enter student's name: ";
    cin >> student1.name;

    cout << "Enter student's age: ";
    cin >> student1.age;

    cout << "Enter student's gender (M/F): ";
    cin >> student1.gender;

    cout << "Enter student's grade: ";
    cin >> student1.grade;

    // Output student information
    cout << "\nStudent Information:" << endl;
    cout << "Name: " << student1.name << endl;
    cout << "Age: " << student1.age << endl;
    cout << "Gender: " << student1.gender << endl;
    cout << "Grade: " << student1.grade << endl;

    return 0;
}
