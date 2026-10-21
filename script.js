var D=[
{l:"S",n:"Específico (Specific)",d:"El objetivo debe ser claro y concreto: qué, quién, dónde y por qué.",q:"¿Qué quiero lograr exactamente? ¿Quién participa? ¿Por qué?",b:"Quiero estar en forma.",g:"Quiero hacer ejercicio en el gimnasio para ganar resistencia."},
{l:"M",n:"Medible (Measurable)",d:"Debe haber indicadores numéricos u observables para saber si avanzas y cuándo lo cumpliste.",q:"¿Cuánto? ¿Cuántos? ¿Cómo sabré que lo logré?",b:"Quiero vender más.",g:"Quiero aumentar mis ventas un 15 %."},
{l:"A",n:"Alcanzable (Achievable)",d:"Debe ser un reto realista según tus recursos, tiempo y habilidades; ni imposible ni trivial.",q:"¿Tengo los recursos y el tiempo? ¿Es realista?",b:"Aprender inglés perfecto en una semana.",g:"Alcanzar nivel B1 de inglés con 30 min diarios."},
{l:"R",n:"Relevante (Relevant)",d:"Debe importar y alinearse con tus metas mayores, valores o con los objetivos del equipo.",q:"¿Vale la pena? ¿Es el momento adecuado? ¿Se alinea con mis metas?",b:"Aprender a tocar el arpa (sin relación con mi carrera).",g:"Aprender Excel avanzado, útil para mi carrera."},
{l:"T",n:"Temporal (Time-bound)",d:"Debe tener fecha límite o plazo, lo que crea urgencia y permite organizar etapas.",q:"¿Cuándo termina? ¿Qué haré en cada etapa?",b:"Algún día terminaré mi proyecto.",g:"Entregaré mi proyecto el 30 de noviembre."}];
var tabs=document.getElementById("tabs"),det=document.getElementById("detail");
D.forEach(function(x,i){var b=document.createElement("button");b.textContent=x.l;b.onclick=function(){show(i)};tabs.appendChild(b)});
function show(i){var x=D[i];[].forEach.call(tabs.children,function(b,j){b.className=j==i?"on":""});
det.innerHTML="<h3>"+x.l+" – "+x.n+"</h3><p>"+x.d+"</p><p><b>Pregunta clave:</b> "+x.q+"</p><p class='badc'>✗ Mal: “"+x.b+"”</p><p class='good'>✓ Bien: “"+x.g+"”</p>"}
show(0);
var ids=["s","m","a","r","t"];
function upd(){var v=ids.map(function(i){return document.getElementById(i).value.trim()});
var n=v.filter(Boolean).length;document.getElementById("pb").style.width=n*20+"%";
document.getElementById("pt").textContent=n+" de 5 criterios completados";
var o=document.getElementById("out");
o.textContent=n==5?"Mi objetivo SMART: "+v[0]+". Lo mediré así: "+v[1]+". Es alcanzable porque "+v[2]+". Es relevante porque "+v[3]+". Plazo: "+v[4]+".":"Completa los campos para ver tu objetivo."}
ids.forEach(function(i){document.getElementById(i).addEventListener("input",upd)});
var Q=[
{t:"“Quiero ser mejor estudiante.” ¿Qué criterio le falta principalmente?",o:["Específico y medible","Solo temporal","Ninguno"],c:0},
{t:"“Leeré 12 libros este año, uno por mes.” ¿Es SMART?",o:["Sí, es específico, medible y con plazo","No, no es medible","No, no tiene plazo"],c:0},
{t:"¿Qué criterio evita fijarse metas imposibles?",o:["Alcanzable","Temporal","Relevante"],c:0}];
var qb=document.getElementById("quiz");
Q.forEach(function(q){var d=document.createElement("div");d.className="card q";d.innerHTML="<b>"+q.t+"</b>";var f=document.createElement("div");f.className="fb";
q.o.forEach(function(t,i){var b=document.createElement("button");b.textContent=t;b.onclick=function(){var ok=i==q.c;f.textContent=ok?"✓ ¡Correcto!":"✗ Intenta de nuevo";f.className="fb "+(ok?"good":"badc")};d.appendChild(b)});
d.appendChild(f);qb.appendChild(d)});
