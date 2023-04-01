function displayResults(result){
    let schoolInfo=document.getElementById("row1")
    let schoolDetails=document.createElement("td")
    schoolDetails.colSpan="9"
    schoolInfo.appendChild(schoolDetails)
    
    let schoolDetailsCont=document.createElement("div")
    schoolDetails.appendChild(schoolDetailsCont)

    let schoolName=document.createElement("h1")
    schoolName.textContent=result.lstStudentInfo[0].SchoolName
    schoolDetailsCont.appendChild(schoolName)

    let schoolAddress=document.createElement("p")
    schoolAddress.textContent=result.lstStudentInfo[0].SchoolAddress+", Affiliation No:"+result.lstStudentInfo[0].SUIDAI+", Ph.:"+result.lstStudentInfo[0].SchoolPhoneNumber
    schoolDetailsCont.appendChild(schoolAddress)

    let schoolMail=document.createElement("p")
    schoolMail.textContent="Mail Id: "+result.lstStudentInfo[0].SchoolEmail
    schoolDetailsCont.appendChild(schoolMail)

    let reportCard=document.createElement("p")
    reportCard.textContent="REPORT CARD"
    schoolDetailsCont.appendChild(reportCard)

    let year=document.createElement("p")
    year.textContent="ACADAMIC SESSION : 2022-2023"
    schoolDetailsCont.appendChild(year)

    let studentInfo=document.getElementById("row2")
    let studentInfoCell=document.createElement("td")
    studentInfoCell.colSpan="9"
    studentInfoCell.classList.add("table-container")
    studentInfo.appendChild(studentInfoCell)
    let studentInfoCont=document.createElement("div")
    studentInfoCont.classList.add("student-info-cont")
    studentInfoCell.appendChild(studentInfoCont)

    let studentInfo1=document.createElement("div")
    studentInfoCont.appendChild(studentInfo1)
    let scholar=document.createElement("p")
    scholar.textContent="Scholor No:-"
    studentInfo1.appendChild(scholar)
    let rollNo=document.createElement("p")
    rollNo.textContent="Roll No:- "+result.lstStudentInfo[0].RollNumber
    studentInfo1.appendChild(rollNo)
    let fatherName=document.createElement("p")
    fatherName.textContent="Father's Name:- "+result.lstStudentInfo[0].FatherName
    studentInfo1.appendChild(fatherName)
    let attendance=document.createElement("p")
    let totalAttendence=0
    for (let i of result.lstStudentInfo[0].Attandence){
        totalAttendence=totalAttendence+i.MonthPresence
    }
    attendance.textContent="Attendance:- "+totalAttendence
    studentInfo1.appendChild(attendance)

    let studentInfo2=document.createElement("div")
    studentInfoCont.appendChild(studentInfo2)
    let classNo=document.createElement("p")
    classNo.textContent="Class :- "+result.lstStudentInfo[0].ClassName
    studentInfo2.appendChild(classNo)
    let name=document.createElement("p")
    name.textContent="Name of Student:- "+result.lstStudentInfo[0].Name
    studentInfo2.appendChild(name)
    let motherName=document.createElement("p")
    motherName.textContent="Mother's Name:- "+result.lstStudentInfo[0].MotherName
    studentInfo2.appendChild(motherName)
    let dateOfBirth=document.createElement("p")
    dateOfBirth.textContent="Date of Birth:- "+result.lstStudentInfo[0].DOB
    studentInfo2.appendChild(dateOfBirth)

    let marksRow=document.getElementById("marksrow")
    marksRow.classList.add("table-cell")
    let ptMarksCont=document.createElement("td")
    ptMarksCont.textContent=result.lstStudentInfo[0].stInternals[4].ScoredMarks
    marksRow.appendChild(ptMarksCont)
    let termMarks=document.createElement("td")
    termMarks.textContent=result.lstStudentInfo[0].lstStudent[5].Marks
    marksRow.appendChild(termMarks)
    let totalMarks=document.createElement("td")
    totalMarks.textContent=result.lstStudentInfo[0].lstStudent[5].Marks+result.lstStudentInfo[0].stInternals[4].ScoredMarks
    marksRow.appendChild(totalMarks)

    if (result.lstStudentInfo[0].stInternals[18].ScoredMarks>=result.lstStudentInfo[0].stInternals[19].ScoredMarks){
        let term2PtScore=document.createElement("td")
        term2PtScore.textContent=result.lstStudentInfo[0].stInternals[18].ScoredMarks
        marksRow.appendChild(term2PtScore)
    }else{
        let term2PtScore=document.createElement("td")
        term2PtScore.textContent=result.lstStudentInfo[0].stInternals[19].ScoredMarks
        marksRow.appendChild(term2PtScore)
    }

    let term2ScoreEng=document.createElement("td")
    term2ScoreEng.textContent=result.lstStudentInfo[0].lstStudent[4].Marks
    marksRow.appendChild(term2ScoreEng)
    let totalTerm2Eng=document.createElement("td")
    totalTerm2Eng.textContent=result.lstStudentInfo[0].lstStudent[4].Marks+result.lstStudentInfo[0].stInternals[18].ScoredMarks
    marksRow.appendChild(totalTerm2Eng)

    let totalPtAndTermEngScore=document.createElement("td")
    totalPtAndTermEngScore.textContent=result.lstStudentInfo[0].lstStudent[5].Marks+result.lstStudentInfo[0].lstStudent[4].Marks
    marksRow.appendChild(totalPtAndTermEngScore)

    let percentageEng=(result.lstStudentInfo[0].lstStudent[5].Marks+result.lstStudentInfo[0].lstStudent[4].Marks)/200*100
    let gradeEng
    if (result.stGrades[0].minRange<=percentageEng && percentageEng<=result.stGrades[0].maxRange){
        gradeEng=document.createElement("td")
        gradeEng.textContent=result.stGrades[0].Grade
        marksRow.appendChild(gradeEng)
    }else if (result.stGrades[1].minRange<=percentageEng && percentageEng<=result.stGrades[1].maxRange){
        gradeEng=document.createElement("td")
        gradeEng.textContent=result.stGrades[1].Grade
        marksRow.appendChild(gradeEng)
    }else if (result.stGrades[2].minRange<=percentageEng && percentageEng<=result.stGrades[2].maxRange){
        gradeEng=document.createElement("td")
        gradeEng.textContent=result.stGrades[2].Grade
        marksRow.appendChild(gradeEng)
    }else if (result.stGrades[3].minRange<=percentageEng && percentageEng<=result.stGrades[3].maxRange){
        gradeEng=document.createElement("td")
        gradeEng.textContent=result.stGrades[3].Grade
        marksRow.appendChild(gradeEng)
    }else if (result.stGrades[4].minRange<=percentageEng && percentageEng<=result.stGrades[4].maxRange){
        gradeEng=document.createElement("td")
        gradeEng.textContent=result.stGrades[4].Grade
        marksRow.appendChild(gradeEng)
    }

    let marksRowHindi=document.getElementById("marksrowHindi")
    marksRowHindi.classList.add("table-cell")
    let ptMarksContHindi=document.createElement("td")
    ptMarksContHindi.textContent=result.lstStudentInfo[0].stInternals[2].ScoredMarks
    marksRowHindi.appendChild(ptMarksContHindi)
    let termMarksHindi=document.createElement("td")
    termMarksHindi.textContent=result.lstStudentInfo[0].lstStudent[2].Marks
    marksRowHindi.appendChild(termMarksHindi)
    let totalMarksHindi=document.createElement("td")
    totalMarksHindi.textContent=result.lstStudentInfo[0].lstStudent[2].Marks+result.lstStudentInfo[0].stInternals[2].ScoredMarks
    marksRowHindi.appendChild(totalMarksHindi)

    if (result.lstStudentInfo[0].stInternals[14].ScoredMarks>=result.lstStudentInfo[0].stInternals[15].ScoredMarks){
        let term2PtScoreHindi=document.createElement("td")
        term2PtScoreHindi.textContent=result.lstStudentInfo[0].stInternals[14].ScoredMarks
        marksRowHindi.appendChild(term2PtScoreHindi)
    }else{
        let term2PtScoreHindi=document.createElement("td")
        term2PtScoreHindi.textContent=result.lstStudentInfo[0].stInternals[15].ScoredMarks
        marksRowHindi.appendChild(term2PtScoreHindi)
    }

    let term2ScoreHindi=document.createElement("td")
    term2ScoreHindi.textContent=result.lstStudentInfo[0].lstStudent[3].Marks
    marksRowHindi.appendChild(term2ScoreHindi)
    let totalTerm2Hindi=document.createElement("td")
    totalTerm2Hindi.textContent=result.lstStudentInfo[0].lstStudent[3].Marks+result.lstStudentInfo[0].stInternals[14].ScoredMarks
    marksRowHindi.appendChild(totalTerm2Hindi)

    let totalPtAndTermHindiScore=document.createElement("td")
    totalPtAndTermHindiScore.textContent=result.lstStudentInfo[0].lstStudent[2].Marks+result.lstStudentInfo[0].lstStudent[3].Marks
    marksRowHindi.appendChild(totalPtAndTermHindiScore)

    let percentageHindi=(result.lstStudentInfo[0].lstStudent[3].Marks+result.lstStudentInfo[0].lstStudent[2].Marks)/200*100
    let gradeHindi
    if (result.stGrades[0].minRange<=percentageHindi && percentageHindi<=result.stGrades[0].maxRange){
        gradeHindi=document.createElement("td")
        gradeHindi.textContent=result.stGrades[0].Grade
        marksRowHindi.appendChild(gradeHindi)
    }else if (result.stGrades[1].minRange<=percentageHindi && percentageHindi<=result.stGrades[1].maxRange){
        gradeHindi=document.createElement("td")
        gradeHindi.textContent=result.stGrades[1].Grade
        marksRowHindi.appendChild(gradeHindi)
    }else if (result.stGrades[2].minRange<=percentageHindi && percentageHindi<=result.stGrades[2].maxRange){
        gradeHindi=document.createElement("td")
        gradeHindi.textContent=result.stGrades[2].Grade
        marksRowHindi.appendChild(gradeHindi)
    }else if (result.stGrades[3].minRange<=percentageHindi && percentageHindi<=result.stGrades[3].maxRange){
        gradeHindi=document.createElement("td")
        gradeHindi.textContent=result.stGrades[3].Grade
        marksRowHindi.appendChild(gradeHindi)
    }else if (result.stGrades[4].minRange<=percentageHindi && percentageHindi<=result.stGrades[4].maxRange){
        gradeHindi=document.createElement("td")
        gradeHindi.textContent=result.stGrades[4].Grade
        marksRowHindi.appendChild(gradeHindi)
    }


    let marksRowMaths=document.getElementById("marksrowMaths")
    marksRowMaths.classList.add("table-cell")
    let ptMarksContMaths=document.createElement("td")
    ptMarksContMaths.textContent=result.lstStudentInfo[0].stInternals[20].ScoredMarks
    marksRowMaths.appendChild(ptMarksContMaths)
    let termMarksMaths=document.createElement("td")
    termMarksMaths.textContent=result.lstStudentInfo[0].lstStudent[7].Marks
    marksRowMaths.appendChild(termMarksMaths)
    let totalMarksMaths=document.createElement("td")
    totalMarksMaths.textContent=result.lstStudentInfo[0].lstStudent[7].Marks+result.lstStudentInfo[0].stInternals[20].ScoredMarks
    marksRowMaths.appendChild(totalMarksMaths)

    if (result.lstStudentInfo[0].stInternals[20].ScoredMarks>=result.lstStudentInfo[0].stInternals[21].ScoredMarks){
        let term2PtScoreMaths=document.createElement("td")
        term2PtScoreMaths.textContent=result.lstStudentInfo[0].stInternals[20].ScoredMarks
        marksRowMaths.appendChild(term2PtScoreMaths)
    }else{
        let term2PtScoreMaths=document.createElement("td")
        term2PtScoreMaths.textContent=result.lstStudentInfo[0].stInternals[21].ScoredMarks
        marksRowMaths.appendChild(term2PtScoreMaths)
    }

    let term2ScoreMaths=document.createElement("td")
    term2ScoreMaths.textContent=result.lstStudentInfo[0].lstStudent[6].Marks
    marksRowMaths.appendChild(term2ScoreMaths)
    let totalTerm2Maths=document.createElement("td")
    totalTerm2Maths.textContent=result.lstStudentInfo[0].lstStudent[6].Marks+result.lstStudentInfo[0].stInternals[20].ScoredMarks
    marksRowMaths.appendChild(totalTerm2Maths)

    let totalPtAndTermMathsScore=document.createElement("td")
    totalPtAndTermMathsScore.textContent=result.lstStudentInfo[0].lstStudent[6].Marks+result.lstStudentInfo[0].lstStudent[7].Marks
    marksRowMaths.appendChild(totalPtAndTermMathsScore)

    let percentageMaths=(result.lstStudentInfo[0].lstStudent[6].Marks+result.lstStudentInfo[0].lstStudent[7].Marks)/200*100
    let gradeMaths
    if (result.stGrades[0].minRange<=percentageMaths && percentageMaths<=result.stGrades[0].maxRange){
        gradeMaths=document.createElement("td")
        gradeMaths.textContent=result.stGrades[0].Grade
        marksRowMaths.appendChild(gradeMaths)
    }else if (result.stGrades[1].minRange<=percentageMaths && percentageMaths<=result.stGrades[1].maxRange){
        gradeMaths=document.createElement("td")
        gradeMaths.textContent=result.stGrades[1].Grade
        marksRowMaths.appendChild(gradeMaths)
    }else if (result.stGrades[2].minRange<=percentageMaths && percentageMaths<=result.stGrades[2].maxRange){
        gradeMaths=document.createElement("td")
        gradeMaths.textContent=result.stGrades[2].Grade
        marksRowMaths.appendChild(gradeMaths)
    }else if (result.stGrades[3].minRange<=percentageMaths && percentageMaths<=result.stGrades[3].maxRange){
        gradeMaths=document.createElement("td")
        gradeMaths.textContent=result.stGrades[3].Grade
        marksRowMaths.appendChild(gradeMaths)
    }else if (result.stGrades[4].minRange<=percentageMaths && percentageMaths<=result.stGrades[4].maxRange){
        gradeMaths=document.createElement("td")
        gradeMaths.textContent=result.stGrades[4].Grade
        marksRowMaths.appendChild(gradeMaths)
    }

    let overallPercentage=document.getElementById("Percentage")
    overallPercentage.textContent="Percentage:- "+result.lstStudentInfo[0].Totalper+"%"
    let overallGrade=document.getElementById("Grade")
    overallGrade.textContent="Grade:- "+result.lstStudentInfo[0].Grade



}

let a=fetch("http://stageapi.iguru.guru:222/api/ExamManagement/GetStudentProgressReports?schoolID=282&sectionID=2682&eXamMasID=8442&students=181521")
a.then((value1)=>{
    return value1.json()
}).then((value2)=>{
    result=value2.Response.ProgressList
    displayResults(result)
})