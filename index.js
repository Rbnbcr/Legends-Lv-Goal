function saveData() {
    try {
        let curLevel = parseInt(document.getElementById("currentLevel").value);
        let curPer = parseFloat(document.getElementById("currentPercent").value);
        let goal = parseInt(document.getElementById("levelGoad").value);
        if (curPer < 0 || 100 < curPer) {
            alert("PERCENT BETWEEN 0 and 100");
            return false;
        }
        if (curLevel < 1 || 200 < curLevel) {
            alert("CURRENT LEVEL BETWEEN 0 and 200");
            return false;
        }
        if (goal < 1 || 200 < goal) {
            alert("GOAL BETWEEN 0 and 200");
            return false;
        }
        if (goal <= curLevel) {
            alert("GOAL NEEDS TO BE GREATER THAN CURRENT LEVEL");
            return false;
        }
        sessionStorage.setItem("curLevel", curLevel);
        sessionStorage.setItem("percent", curPer);
        sessionStorage.setItem("goal", goal);
    } catch (e) {
        console.log(e);
        return false;
    }
    return true;
}