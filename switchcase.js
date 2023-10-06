var hari = "Senin";
var aktivitas = "";

switch (hari) {
    case "Senin":
        aktivitas = "Meeting dengan tim";
        break;
    case "Selasa":
        aktivitas = "Presentasi";
        break;
    case "Rabu":
        aktivitas = "Kursus online";
        break;
    default:
        aktivitas = "Istirahat";
}

console.log("Pada hari " + hari + ", Anda akan " + aktivitas + ".");