/* =====================================================================
   MENÚ DEL PORTAL DE SERVICIOS · U.E. "Cap. Edmundo Chiriboga"
   Este archivo lo usan TODAS las páginas (index.html y las demás).
   Para cambiar los menús o los accesos principales, edite solo aquí.

   - {t:"Nombre", url:"enlace"}            → opción simple
   - {t:"Nombre", items:[ ... ]}           → grupo con subopciones
   url:"#"  → página interna del inicio, editable por los administradores.
   Otro enlace → se abre ese enlace (full:true = sistema externo).
   ===================================================================== */
(function(){
"use strict";

/* Sistemas externos */
var SISTEMA_ACADEMICO = "https://maurysnaranjo-ec.github.io/ACAD-UECECH-R/academico.html";
var SISTEMA_SIEE = "https://academico.educarecuador.gob.ec/academico-servicios/pages/authentication/login-v2?returnUrl=%2Fpages%2Finicio";

/* 1) ACCESOS PRINCIPALES (círculos de la página de inicio) */
var PRINCIPALES = [
  {n:"Académico", i:"🎓", d:"Sistema académico y calificaciones", url:SISTEMA_ACADEMICO, full:true},
  {n:"Portal de Estudiantes", i:"🧑‍🎓", d:"Servicios para estudiantes", url:SISTEMA_ACADEMICO, full:true},
  {n:"Distributivo", i:"📋", d:"Distributivo docente", url:"distributivo.html"},
  {n:"Horarios", i:"⏰", d:"Horarios de clase", url:"horarios.html"},
  {n:"Cronograma de Actividades", i:"🗓️", d:"Calendario institucional", url:"cronograma.html"},
  {n:"Momentos Cívicos", i:"🇪🇨", d:"Cronograma por sede", url:"momentos-civicos.html"},
  {n:"Reserva Espacios", i:"🏫", d:"Aulas, laboratorios y auditorio", url:"reservas.html"}
];

/* 2) MENÚS (cinta de opciones superior) */
var MENUS = [
 {t:"Índice", url:"#/"},
 {t:"Institución", items:[
   {t:"Misión", url:"#"},
   {t:"Visión", url:"#"},
   {t:"Historia", url:"#"},
   {t:"Himno a la Institución", url:"#"},
   {t:"Revistas Institucionales", url:"#"},
   {t:"Autoridades", url:"#"}]},
 {t:"Estudiantes", items:[
   {t:"Autorización de uso de imagen", url:"autorizacion-imagen.html"},
   {t:"Notificación de alerta", url:"notificacion-alerta.html"},
   {t:"Uso de celulares", url:"#"},
   {t:"Solicitud de mejora", url:"#"},
   {t:"Autorización de salida de estudiantes", url:"autorizacion-salida.html"},
   {t:"Autorización de registro de pertenencias", url:"autorizacion-pertenencias.html"},
   {t:"Modelo de oficio", url:"modelo-oficio.html"}]},
 {t:"Docentes", items:[
   {t:"Cronograma de actividades", url:"cronograma.html"},
   {t:"Lineamientos 26-27", url:"#"},
   {t:"Cronograma Sierra - Amazonía", url:"#"},
   {t:"Distributivo", url:"distributivo.html"},
   {t:"Doc Acomp / Coordinadores", url:"acompanamiento.html"},
   {t:"Docentes PPE", url:"docentes-ppe.html"},
   {t:"Cobertura DECE", url:"#"},
   {t:"Horarios de clases", items:[
     {t:"EGBS - Bachillerato", url:"horarios.html"}]},
   {t:"Resolución de conflictos", url:"conflictos.html"},
   {t:"Brigada Docentes", url:"brigadas.html"},
   {t:"Académico", items:[
     {t:"Académico UECECH", url:SISTEMA_ACADEMICO, full:true},
     {t:"Académico SIEE", url:SISTEMA_SIEE, full:true}]},
   {t:"Formato institucional", url:"#"},
   {t:"Reserva de espacios", url:"reservas.html"},
   {t:"Trámites", items:[
     {t:"Proceso Justificación", url:"justificacion.html"},
     {t:"Formulario Vacaciones", url:"vacaciones.html"},
     {t:"Modelo de oficio", url:"modelo-oficio.html"},
     {t:"Delegación Deportiva", url:"#"},
     {t:"Licencia sin remuneración", url:"#"}]},
   {t:"Inspección", items:[
     {t:"Informes Técnicos", url:"informes.html"},
     {t:"Informes Vacaciones", url:"informes-vacaciones.html"},
     {t:"Certificados/oficios", url:"certificados.html"},
     {t:"Datos Personal UECECH", url:"datos-personal.html"},
     {t:"Nómina Personal UECECH", url:"nomina.html"},
     {t:"Control de asistencia", url:"control-asistencia.html"}]},
   {t:"Correos Institucionales", url:"#"},
   {t:"Informe Económico", url:"informe-economico.html"}]},
 {t:"Acompañamiento", items:[
   {t:"Momentos Cívicos", url:"momentos-civicos.html"},
   {t:"Brigadas Padres de Familia", url:"brigadas-padres.html"},
   {t:"Acta uso de celular en clase", url:"acta-uso-celular.html"},
   {t:"Acta por consumo", url:"acta-consumo.html"},
   {t:"Notificación de alerta", url:"notificacion-alerta.html"},
   {t:"Autorización reunión", url:"autorizacion-reunion.html"}]},
 {t:"Consejo Estudiantil", items:[
   {t:"Convocatoria", url:"#"},
   {t:"Formulario de inscripción", url:"#"}]},
 {t:"Documentos DECE", items:[
   {t:"Ficha", url:"#"},
   {t:"Consentimiento", url:"#"},
   {t:"Manejo de datos", url:"#"},
   {t:"Uso de imagen", url:"#"},
   {t:"Caso de emergencia", url:"#"}]},
 {t:"Comité PPFF", items:[
   {t:"Directiva PPFF", url:"#"}]},
 {t:"Videos", items:[
   {t:"Notificaciones", url:"#"},
   {t:"Reporte asistencia", url:"#"},
   {t:"Ingreso calificaciones", url:"#"}]},
 {t:"Marco Legal", items:[
   {t:"Acuerdos Ministeriales", items:[
     {t:"2026", url:"#"},
     {t:"2025", url:"#"},
     {t:"2024", url:"#"},
     {t:"2023", url:"#"}]},
   {t:"LOEI", url:"#"},
   {t:"Reglamento LOEI", url:"#"},
   {t:"LOSEP", url:"#"},
   {t:"Reglamento LOSEP", url:"#"},
   {t:"6to Contrato Colectivo", url:"#"},
   {t:"Manual de Comunicación", url:"#"}]},
 {t:"Contacto", url:"#"}
];

window.UE_SISTEMA_ACADEMICO = SISTEMA_ACADEMICO;
window.UE_PRINCIPALES = PRINCIPALES;
window.UE_MENUS = MENUS;

/* =====================================================================
   Cinta de opciones en las demás páginas (index.html dibuja la suya).
   ===================================================================== */
function esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
function slugify(s){ return s.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""); }
function archivoActual(){ var p = location.pathname.split("/").pop(); return p || "index.html"; }

function enlace(x, path){
  if(x.url === "#/") return "index.html";
  if(x.url === "#") return "index.html#/" + path.concat(x.t).map(slugify).join("/");
  return x.url;
}
function contieneActual(items, actual){
  return items.some(function(x){ return x.items ? contieneActual(x.items, actual) : x.url === actual; });
}
function lista(items, path, actual){
  return '<ul class="uem-list">' + items.map(function(x){
    if(x.items) return '<li><details' + (contieneActual(x.items, actual) ? ' open' : '') + '><summary>' + esc(x.t) + '</summary>' + lista(x.items, path.concat(x.t), actual) + '</details></li>';
    var ext = x.full ? ' target="_blank" rel="noopener"' : '';
    var cur = x.url === actual ? ' aria-current="page" class="uem-cur"' : '';
    return '<li><a href="' + esc(enlace(x, path)) + '"' + ext + cur + '>' + esc(x.t) + (x.full ? ' ↗' : '') + '</a></li>';
  }).join("") + '</ul>';
}

var CSS = ''
 + '.uem-bar{background:#e6f7f5;border-top:1px solid #d7dce8;font-family:Arial,Helvetica,sans-serif}'
 + '.uem-bar>ul{list-style:none;margin:0 auto;padding:0 12px;display:flex;flex-wrap:wrap;justify-content:center}'
 + '.uem-bar>ul>li{position:relative}'
 + '.uem-bar>ul>li>a,.uem-bar>ul>li>button{display:block;padding:12px 12px;font:bold 12.5px/1.2 Arial,Helvetica,sans-serif;color:#0b1f4d;text-decoration:none;text-transform:uppercase;background:none;border:0;border-radius:0;box-shadow:none;letter-spacing:0;cursor:pointer;border-bottom:3px solid transparent;margin:0 0 -3px}'
 + '.uem-bar>ul>li.open>button,.uem-bar>ul>li>a:hover,.uem-bar>ul>li>button:hover,.uem-bar>ul>li.uem-here>button{border-bottom-color:#d41a2a}'
 + '.uem-bar .uem-dd{display:none;position:absolute;top:100%;left:0;width:310px;max-height:calc(100vh - 140px);overflow:auto;background:#fff;border:1px solid #d7dce8;border-top:3px solid #1fb5a5;box-shadow:0 10px 24px rgba(11,31,77,.18);padding:6px 0;z-index:900;text-align:left}'
 + '.uem-bar>ul>li.right .uem-dd{left:auto;right:0}'
 + '.uem-bar>ul>li.open>.uem-dd{display:block}'
 + '.uem-bar>ul>li.nh>.uem-dd{display:none!important}'
 + '@media (hover:hover){.uem-bar>ul>li:hover>.uem-dd{display:block}}'
 + '.uem-list{list-style:none;margin:0;padding:0}'
 + '.uem-list a{display:block;padding:9px 16px;font:14px/1.3 Arial,Helvetica,sans-serif;text-decoration:none;color:#0b1f4d;border-left:4px solid transparent;text-transform:none}'
 + '.uem-list a:hover,.uem-list a.uem-cur{background:#e6f7f5;border-left-color:#d41a2a}'
 + '.uem-list a.uem-cur{font-weight:bold}'
 + '.uem-list details>summary{list-style:none;padding:9px 16px;font:bold 14px/1.3 Arial,Helvetica,sans-serif;cursor:pointer;color:#0b1f4d;border-left:4px solid transparent;display:flex;justify-content:space-between;gap:8px}'
 + '.uem-list details>summary::-webkit-details-marker{display:none}'
 + '.uem-list details>summary::after{content:"▸";color:#1fb5a5}'
 + '.uem-list details[open]>summary::after{content:"▾"}'
 + '.uem-list details>summary:hover{background:#e6f7f5;border-left-color:#d41a2a}'
 + '.uem-list details>.uem-list{margin-left:14px;border-left:2px solid #e6f7f5}'
 + '.uem-burger{display:none;background:none;border:0;font-size:26px;line-height:1;color:#0b1f4d;cursor:pointer;padding:4px 6px;box-shadow:none}'
 + '#uem-side{position:fixed;top:0;left:0;bottom:0;width:300px;max-width:86vw;background:#fff;z-index:1100;transform:translateX(-100%);visibility:hidden;transition:.25s;padding:calc(12px + env(safe-area-inset-top,0px)) 0 16px;box-shadow:4px 0 16px rgba(0,0,0,.25);overflow:auto;text-align:left;font-family:Arial,Helvetica,sans-serif}'
 + '#uem-side.open{transform:none;visibility:visible}'
 + '#uem-side h3{margin:0 0 8px;padding:6px 20px 14px;color:#0b1f4d;font:bold 16px Arial,Helvetica,sans-serif;position:relative;text-transform:none;letter-spacing:0;border:0}'
 + '#uem-side h3::after{content:"";position:absolute;left:0;right:0;bottom:0;height:9px;background:linear-gradient(to bottom,#1fb5a5 0 60%,#d41a2a 60% 100%)}'
 + '#uem-side>.uem-list>li{border-bottom:1px solid #d7dce8}'
 + '#uem-side>.uem-list>li>a,#uem-side>.uem-list>li>details>summary{padding:12px 20px;font-weight:bold}'
 + '#uem-ov{position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:1090;display:none}#uem-ov.show{display:block}'
 + '@media(max-width:1180px){.uem-bar>ul{padding:0 4px}.uem-bar>ul>li>a,.uem-bar>ul>li>button{padding:12px 8px;font-size:11.5px}}'
 + '@media(max-width:1100px){.uem-bar>ul>li>a,.uem-bar>ul>li>button{padding:12px 5px;font-size:10.5px}}'
 + '@media(max-width:1020px){.uem-bar{display:none}.uem-burger{display:block}}'
 + '@media(max-width:600px){header.ue-head .ue-bar{gap:8px;padding-left:10px;padding-right:10px}header.ue-head .ue-brand{min-width:0;font-size:16px}header.ue-head .ue-brand img{width:40px;height:40px}header.ue-head .ue-back{padding:7px 10px;font-size:12px}}'
 + '@media print{.uem-bar,.uem-burger,#uem-side,#uem-ov{display:none!important}}';

function iniciar(){
  if(window.self !== window.top) return;                 // página incrustada (iframe): sin menú
  var head = document.querySelector("header.ue-head");
  if(!head || document.querySelector(".uem-bar")) return; // index.html o ya dibujado
  var bar = head.querySelector(".ue-bar");
  var actual = archivoActual();

  var st = document.createElement("style"); st.textContent = CSS; document.head.appendChild(st);

  // Cinta de opciones (escritorio / tablet)
  var nav = document.createElement("nav");
  nav.className = "uem-bar"; nav.setAttribute("aria-label", "Menú principal");
  nav.innerHTML = '<ul>' + MENUS.map(function(M, i){
    if(!M.items) return '<li><a href="' + esc(enlace(M, [])) + '">' + esc(M.t) + '</a></li>';
    var cls = (i >= MENUS.length - 4 ? 'right ' : '') + (contieneActual(M.items, actual) ? 'uem-here' : '');
    return '<li class="' + cls + '"><button type="button" aria-haspopup="true" aria-expanded="false">' + esc(M.t) + ' ▾</button><div class="uem-dd">' + lista(M.items, [M.t], actual) + '</div></li>';
  }).join("") + '</ul>';
  if(bar && bar.nextSibling) head.insertBefore(nav, bar.nextSibling); else head.appendChild(nav);

  function cerrarTodo(){
    nav.querySelectorAll("li.open").forEach(function(l){ l.classList.remove("open"); l.firstElementChild.setAttribute("aria-expanded", "false"); });
  }
  nav.querySelectorAll(":scope>ul>li>button").forEach(function(b){
    b.addEventListener("click", function(e){
      e.stopPropagation();
      var li = b.parentElement, abrir = !li.classList.contains("open");
      cerrarTodo(); li.classList.remove("nh"); li.classList.toggle("open", abrir); b.setAttribute("aria-expanded", abrir);
    });
  });
  nav.querySelectorAll(".uem-dd").forEach(function(dd){
    dd.addEventListener("click", function(e){
      if(!e.target.closest("a")) return;
      var li = dd.parentElement; li.classList.add("nh"); cerrarTodo();
      li.addEventListener("mouseleave", function(){ li.classList.remove("nh"); }, {once:true});
    });
  });
  document.addEventListener("click", function(e){ if(!e.target.closest(".uem-bar")) cerrarTodo(); });

  // Menú lateral (celular)
  var side = document.createElement("nav");
  side.id = "uem-side"; side.setAttribute("aria-label", "Menú principal");
  side.innerHTML = '<h3>Menú UECECH</h3>' + lista(MENUS, [], actual);
  var ov = document.createElement("div"); ov.id = "uem-ov";
  document.body.appendChild(ov); document.body.appendChild(side);
  var burger = document.createElement("button");
  burger.type = "button"; burger.className = "uem-burger"; burger.setAttribute("aria-label", "Abrir menú"); burger.textContent = "☰";
  if(bar) bar.insertBefore(burger, bar.firstChild);
  function lateral(abrir){ side.classList.toggle("open", abrir); ov.classList.toggle("show", abrir); }
  burger.addEventListener("click", function(){ lateral(!side.classList.contains("open")); });
  ov.addEventListener("click", function(){ lateral(false); });
  side.addEventListener("click", function(e){ if(e.target.tagName === "A") lateral(false); });
  document.addEventListener("keydown", function(e){ if(e.key === "Escape"){ cerrarTodo(); lateral(false); } });
}
if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", iniciar); else iniciar();
})();
