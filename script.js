const translations = {
  ar: {
    navSchedule:"الجدول", navAbout:"عن النظام", navTips:"نصائح",
    heroText:"نظّم تمرينك، تابع عدّاتك ومجموعاتك، وخلي الاستمرارية هي سر تقدمك.",
    explore:"استكشف الجدول", scheduleTitle:"جدول", workout:"التمرين",
    chooseDay:"اختار اليوم عشان تشوف تفاصيله", aboutTitle:"يعني إيه Arnold Split؟",
    aboutText:"تقسيمة تدريب بتوزّع مجموعات عضلية مختلفة على أيام الأسبوع. الجدول نموذج عام قابل للتعديل حسب الخبرة والاستشفاء.",
    tipsTitle:"نصائح للتمرين", safety:"ملاحظة: ده منظم عام للتمرين وليس برنامجًا طبيًا أو وصفة تدريب شخصية. استخدم مقاومة مناسبة، واطلب مساعدة مدرب مؤهل، وتوقف لو حسيت بألم أو دوخة.",
    day:"اليوم", rest:"راحة واستشفاء", exercises:"التمارين", target:"الهدف", reps:"العدات",
    sets:"المجموعات", done:"مجموعات مكتملة", finishSet:"إنهاء المجموعة", setDone:"المجموعة اكتملت ✓",
    needReps:"كمّل 8 عدّات على الأقل قبل إنهاء المجموعة.", reset:"إعادة التمرين", restText:"خد وقتك في الراحة والاستشفاء. الحركة الخفيفة اختيارية.",
    tips:[
      "ابدأ بإحماء خفيف وحركات تحضيرية مناسبة.",
      "اتعلم الحركة من غير وزن أو بمقاومة خفيفة أولًا.",
      "اختار مقاومة تقدر تتحكم فيها من غير تأرجح أو استعجال.",
      "نفّذ الحركة بمدى مريح ومن غير ألم.",
      "خد راحة كافية بين المجموعات، وماتستعجلش.",
      "زود الصعوبة بالتدريج وبمساعدة مدرب مؤهل.",
      "النوم والراحة جزء مهم من التعافي.",
      "اشرب مياه بانتظام خلال اليوم.",
      "اهتم بأكل متوازن ومتنوع، من غير حرمان أو مبالغة.",
      "لو حسيت بألم أو دوخة، أوقف التمرين واطلب مساعدة."
    ],
    progress:"تقدم اليوم", complete:"أحسنت! خلصت المجموعات المحددة للتمرين ده.",
    restDay:"يوم راحة", optional:"اختياري"
  },
  en: {
    navSchedule:"Schedule", navAbout:"About", navTips:"Tips",
    heroText:"Organize your workouts, track reps and sets, and build consistency one day at a time.",
    explore:"Explore the plan", scheduleTitle:"Workout", workout:"Schedule",
    chooseDay:"Choose a day to see its details", aboutTitle:"What is Arnold Split?",
    aboutText:"A training split that organizes different muscle groups across the week. This is a general template that should be adjusted for experience and recovery.",
    tipsTitle:"Training tips", safety:"Note: This is a general workout organizer, not medical advice or a personalized training prescription. Use suitable resistance, ask a qualified coach for help, and stop if you feel pain or dizziness.",
    day:"Day", rest:"Rest & Recovery", exercises:"Exercises", target:"Target", reps:"Reps",
    sets:"Sets", done:"Sets completed", finishSet:"Complete set", setDone:"Set completed ✓",
    needReps:"Complete at least 8 reps before finishing this set.", reset:"Reset exercise", restText:"Take time to rest and recover. Gentle movement is optional.",
    tips:[
      "Start with a gentle warm-up and suitable preparation movements.",
      "Learn each movement without weight or with light resistance first.",
      "Choose resistance you can control without swinging or rushing.",
      "Use a comfortable range of motion and avoid painful movement.",
      "Rest between sets; there is no need to rush.",
      "Progress gradually with guidance from a qualified coach.",
      "Sleep and rest are important parts of recovery.",
      "Drink water regularly throughout the day.",
      "Choose balanced, varied meals without restrictive rules.",
      "Stop if you feel pain or dizziness and ask for help."
    ],
    progress:"Daily progress", complete:"Well done! You completed the planned sets for this exercise.",
    restDay:"Rest day", optional:"Optional"
  }
};

const days = [
  {ar:"صدر + ظهر",en:"Chest + Back",tag:"CHEST / BACK",items:[
    ["ضغط صدر بالدمبل","Dumbbell Chest Press"],["سحب أمامي للظهر","Lat Pulldown"],["ضغط صدر على جهاز","Machine Chest Press"],["تجديف جالس","Seated Cable Row"]
  ]},
  {ar:"كتف + ذراع",en:"Shoulders + Arms",tag:"SHOULDERS / ARMS",items:[
    ["ضغط كتف خفيف","Light Shoulder Press"],["رفرفة جانبي","Lateral Raise"],["ثني بايسبس","Biceps Curl"],["تمديد ترايسبس بالكابل","Cable Triceps Extension"]
  ]},
  {ar:"رجل",en:"Legs",tag:"LEGS",items:[
    ["سكوات وزن الجسم أو خفيف","Bodyweight or Light Squat"],["ضغط رجل","Leg Press"],["ثني خلفية الرجل","Leg Curl"],["رفع سمانة","Calf Raise"]
  ]},
  {ar:"صدر + ظهر",en:"Chest + Back",tag:"CHEST / BACK",items:[
    ["ضغط صدر مائل بالدمبل","Incline Dumbbell Press"],["سحب أرضي بالكابل","Seated Cable Row"],["تفتيح صدر على جهاز","Machine Chest Fly"],["سحب مستقيم للظهر","Straight-Arm Pulldown"]
  ]},
  {ar:"كتف + ذراع",en:"Shoulders + Arms",tag:"SHOULDERS / ARMS",items:[
    ["رفرفة جانبي","Lateral Raise"],["رفرفة خلفي","Rear Delt Fly"],["بايسبس دمبل","Dumbbell Biceps Curl"],["ترايسبس بالحبل","Rope Triceps Pushdown"]
  ]},
  {ar:"رجل + حركة",en:"Legs + Mobility",tag:"LEGS / MOBILITY",items:[
    ["اندفاع ثابت بوزن الجسم","Bodyweight Split Squat"],["جسر الحوض","Glute Bridge"],["رفع سمانة","Calf Raise"],["حركة ومرونة خفيفة","Gentle Mobility"]
  ]},
  {ar:"راحة واستشفاء",en:"Rest & Recovery",tag:"REST DAY",rest:true,items:[
    ["راحة ونوم كفاية","Rest and enough sleep"],["مشي خفيف اختياري","Optional gentle walk"],["وجبات متوازنة ومياه","Balanced meals and water"]
  ]}
];

let language = "ar";
let selectedDay = 0;
const grid = document.getElementById("weekGrid");
const detail = document.getElementById("dayDetail");
const progress = {};

function t(key){ return translations[language][key]; }
function setLanguage(lang){
  language = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.getElementById("langBtn").textContent = lang === "ar" ? "EN" : "عربي";
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.dataset.i18n;
    if(translations[lang][key]) el.textContent = translations[lang][key];
  });
  renderDays();
  renderTips();
  showDay(selectedDay);
}
function renderDays(){
  grid.innerHTML = "";
  days.forEach((d,i)=>{
    const card = document.createElement("button");
    card.type = "button";
    card.className = "day-card" + (i===selectedDay ? " active" : "");
    card.innerHTML = `<div class="day-num">0${i+1}</div><strong>${d[language]}</strong><small>${language==="ar" ? "اليوم" : "DAY"} ${i+1}</small>`;
    card.addEventListener("click",()=>{selectedDay=i;renderDays();showDay(i);});
    grid.appendChild(card);
  });
}
function renderTips(){
  document.getElementById("tipsList").innerHTML = t("tips").map(tip=>`<li>${tip}</li>`).join("");
}
function showDay(index){
  const d = days[index];
  if(d.rest){
    detail.innerHTML = `<div class="detail-head"><h3>${d[language]}</h3><span>${d.tag}</span></div>
      <p class="rest-message">${t("restText")}</p>
      <div class="rest-list">${d.items.map(item=>`<div class="exercise"><b>${language==="ar"?item[0]:item[1]}</b><small>${t("optional")}</small></div>`).join("")}</div>`;
    return;
  }
  detail.innerHTML = `<div class="detail-head"><div><h3>${t("day")} ${index+1} — ${d[language]}</h3><span class="detail-sub">${t("exercises")} • ${d.tag}</span></div><span class="day-progress" id="dayProgress"></span></div>
    <div class="exercise-list">${d.items.map((item,j)=>exerciseMarkup(index,j,item)).join("")}</div>`;
  d.items.forEach((item,j)=>wireExercise(index,j));
  updateDayProgress(index);
}
function exerciseMarkup(dayIndex,exerciseIndex,item){
  const key = `${dayIndex}-${exerciseIndex}`;
  const state = progress[key] || {reps:0,sets:0};
  const name = language==="ar" ? item[0] : item[1];
  return `<div class="exercise-card" id="exercise-${key}">
    <div class="exercise-top"><div><b>${name}</b><small>${t("target")}: 2 ${t("sets")} × 8–12 ${t("reps")}</small></div><span class="exercise-icon">✦</span></div>
    <div class="counter-row">
      <span class="counter-label">${t("reps")}</span>
      <div class="counter"><button type="button" class="counter-btn minus" aria-label="Decrease reps">−</button><strong class="rep-value">${state.reps}</strong><button type="button" class="counter-btn plus" aria-label="Increase reps">+</button></div>
    </div>
    <div class="set-row"><span class="set-status">${t("done")}: ${state.sets}/2</span><button type="button" class="finish-set" ${state.sets>=2?"disabled":""}>${state.sets>=2?t("setDone"):t("finishSet")}</button></div>
    <div class="mini-progress"><span style="width:${state.sets*50}%"></span></div>
    <button type="button" class="reset-exercise">${t("reset")}</button>
  </div>`;
}
function wireExercise(dayIndex,exerciseIndex){
  const key = `${dayIndex}-${exerciseIndex}`;
  const card = document.getElementById(`exercise-${key}`);
  const state = progress[key] || (progress[key]={reps:0,sets:0});
  const value = card.querySelector(".rep-value");
  const minus = card.querySelector(".minus");
  const plus = card.querySelector(".plus");
  const finish = card.querySelector(".finish-set");
  const status = card.querySelector(".set-status");
  const bar = card.querySelector(".mini-progress span");
  const reset = card.querySelector(".reset-exercise");
  function paint(){
    value.textContent=state.reps;
    status.textContent=`${t("done")}: ${state.sets}/2`;
    bar.style.width=`${state.sets*50}%`;
    finish.disabled=state.sets>=2;
    finish.textContent=state.sets>=2?t("setDone"):t("finishSet");
    card.classList.toggle("completed",state.sets>=2);
  }
  minus.addEventListener("click",()=>{state.reps=Math.max(0,state.reps-1);paint();});
  plus.addEventListener("click",()=>{state.reps=Math.min(12,state.reps+1);paint();});
  finish.addEventListener("click",()=>{
    if(state.reps<8){finish.textContent=t("needReps");finish.classList.add("hint");return;}
    state.sets=Math.min(2,state.sets+1);state.reps=0;finish.classList.remove("hint");paint();updateDayProgress(dayIndex);
    if(state.sets===2) finish.textContent=t("setDone");
  });
  reset.addEventListener("click",()=>{state.reps=0;state.sets=0;finish.classList.remove("hint");paint();updateDayProgress(dayIndex);});
  paint();
}
function updateDayProgress(dayIndex){
  const d=days[dayIndex];
  if(d.rest)return;
  const total=d.items.length*2;
  const done=d.items.reduce((sum,_,j)=>sum+((progress[`${dayIndex}-${j}`]||{}).sets||0),0);
  const el=document.getElementById("dayProgress");
  if(el)el.textContent=`${t("progress")}: ${done}/${total}`;
  if(done===total && el)el.textContent=t("complete");
}

document.getElementById("langBtn").addEventListener("click",()=>setLanguage(language==="ar"?"en":"ar"));
document.getElementById("themeBtn").addEventListener("click",()=>document.body.classList.toggle("light"));
document.getElementById("year").textContent=new Date().getFullYear();
setLanguage("ar");
