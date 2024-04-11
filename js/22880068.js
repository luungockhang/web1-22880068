const API = "https://web1-api.vercel.app/api";
const siteKey = "6Lea2bcpAAAAAArBqKF1mP8v0lCpOhivhL9JnPZz";

async function loadData(request, templateId, viewId){
    const response = await fetch(`${API}/${request}`);
    const data = await response.json();
    
    var source = document.getElementById(templateId).innerHTML;
    var template = Handlebars.compile(source);
    var context = { data : data };
    var view = document.getElementById(viewId);
    view.innerHTML = template(context);
};

