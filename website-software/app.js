const modules = {
 customers:{title:"Customers",desc:"Manage customer contact records.",fields:[["name","Customer name","text",true],["phone","Phone / WhatsApp","tel",true],["email","Email","email",false],["address","Site address","text",false],["notes","Notes","textarea",false]]},
 projects:{title:"Projects",desc:"Track ceiling, TV wall, and interior projects.",fields:[["name","Project name","text",true],["customer","Customer","text",true],["location","Location","text",false],["service","Work type","text",false],["status","Status","select",true,["Enquiry","Survey","In progress","On hold","Completed"]],["startDate","Start date","date",false],["dueDate","Target completion","date",false],["budget","Estimated budget (PKR)","number",false]]},
 quotations:{title:"Quotations",desc:"Prepare and track customer estimates.",fields:[["quoteNo","Quotation number","text",true],["customer","Customer","text",true],["description","Work description","textarea",true],["amount","Total amount (PKR)","number",true],["validUntil","Valid until","date",false],["status","Status","select",true,["Draft","Sent","Approved","Rejected","Expired"]]]},
 orders:{title:"Orders",desc:"Track confirmed work orders.",fields:[["orderNo","Order number","text",true],["customer","Customer","text",true],["project","Project","text",false],["amount","Order amount (PKR)","number",false],["status","Status","select",true,["New","Confirmed","In progress","Completed","Cancelled"]],["dueDate","Due date","date",false]]},
 invoices:{title:"Invoices",desc:"Record bills issued to customers.",fields:[["invoiceNo","Invoice number","text",true],["customer","Customer","text",true],["amount","Invoice amount (PKR)","number",true],["issueDate","Issue date","date",false],["dueDate","Due date","date",false],["status","Status","select",true,["Unpaid","Part paid","Paid","Overdue"]]]},
 payments:{title:"Payments",desc:"Keep a record of received payments.",fields:[["receiptNo","Receipt number","text",true],["customer","Customer","text",true],["invoiceNo","Invoice number","text",false],["amount","Received amount (PKR)","number",true],["method","Payment method","select",true,["Cash","Bank transfer","JazzCash","Easypaisa","Other"]],["date","Payment date","date",true],["notes","Notes","textarea",false]]},
 inventory:{title:"Inventory",desc:"Track materials and available stock.",fields:[["item","Material / item name","text",true],["sku","Item code","text",false],["unit","Unit","select",true,["Piece","Sheet","Meter","Box","Bag","Kg","Other"]],["quantity","Quantity in stock","number",true],["reorder","Reorder level","number",false],["cost","Unit cost (PKR)","number",false],["supplier","Supplier","text",false]]},
 appointments:{title:"Appointments",desc:"Schedule customer visits, measurements, and follow-ups.",fields:[["customer","Customer","text",true],["phone","Contact number","tel",false],["date","Appointment date","date",true],["time","Time","time",false],["purpose","Purpose","select",true,["Site measurement","Consultation","Installation visit","Follow-up","Other"]],["location","Location","text",false],["status","Status","select",true,["Scheduled","Completed","Rescheduled","Cancelled"]],["notes","Notes","textarea",false]]},
 leads:{title:"Leads & CRM",desc:"Track enquiries and convert prospects into customers.",fields:[["name","Lead name","text",true],["phone","Phone / WhatsApp","tel",true],["source","Lead source","select",false,["Website","WhatsApp","Phone call","Referral","Social media","Walk-in","Other"]],["service","Interested service","text",false],["budget","Estimated budget (PKR)","number",false],["stage","Lead stage","select",true,["New","Contacted","Site visit","Quotation sent","Won","Lost"]],["followUp","Next follow-up","date",false],["notes","Notes","textarea",false]]},
 team:{title:"Team",desc:"Keep a basic directory of staff and assigned roles.",fields:[["name","Team member","text",true],["phone","Phone","tel",false],["role","Role","text",true],["joinDate","Joining date","date",false],["payType","Pay type","select",false,["Daily","Monthly","Contract","Other"]],["rate","Rate (PKR)","number",false],["status","Status","select",true,["Active","Inactive"]]]},
 expenses:{title:"Expenses",desc:"Record business and project expenses.",fields:[["date","Expense date","date",true],["category","Category","select",true,["Materials","Labour","Transport","Tools","Rent","Utilities","Marketing","Other"]],["description","Description","text",true],["project","Project","text",false],["amount","Amount (PKR)","number",true],["paidTo","Paid to","text",false],["method","Payment method","select",false,["Cash","Bank transfer","JazzCash","Easypaisa","Other"]]]},
 dailyLogs:{title:"Daily Site Logs",desc:"Record daily site progress, labour, and material usage.",fields:[["date","Log date","date",true],["project","Project name","text",true],["supervisor","Supervisor","text",false],["workers","Workers present","number",false],["workDone","Work completed today","textarea",true],["materials","Materials used","textarea",false],["issues","Issues / delays","textarea",false],["nextStep","Next work plan","textarea",false]]},
 savedDesigns:{title:"Saved Designs",desc:"Keep a record of designs selected by customers.",fields:[["customer","Customer","text",true],["designName","Design name / ID","text",true],["category","Category","select",true,["TV Lounge","Bedroom","Office","Kitchen","Islamic Design","Wooden","Geometric","3D","Other"]],["reference","Image URL or reference","text",false],["notes","Customer requirements","textarea",false],["status","Status","select",true,["Shortlisted","Approved","Rejected","Installed"]]]},
 gallery:{title:"Gallery Manager",desc:"Manage project gallery entries and image references.",fields:[["title","Gallery title","text",true],["category","Category","select",true,["False Ceiling","TV Wall","Bedroom","Office","Kitchen","Other"]],["imageUrl","Image URL","url",false],["project","Related project","text",false],["description","Description","textarea",false],["visibility","Visibility","select",true,["Draft","Published","Hidden"]]]},
 testimonials:{title:"Testimonials",desc:"Manage customer feedback before publishing.",fields:[["customer","Customer name","text",true],["rating","Rating (1–5)","number",true],["feedback","Feedback","textarea",true],["date","Date","date",false],["permission","Publication permission","select",true,["Not requested","Granted","Not granted"]],["status","Status","select",true,["Pending review","Approved","Hidden"]]]}
,
 notifications:{title:"Notifications",desc:"Track follow-ups, reminders, and internal business notices.",fields:[["title","Notification title","text",true],["type","Type","select",true,["Follow-up","Payment due","Appointment","Stock alert","Project update","General"]],["dueDate","Reminder date","date",false],["relatedTo","Related customer / project","text",false],["priority","Priority","select",true,["Low","Normal","High"]],["status","Status","select",true,["Unread","Read","Completed"]],["details","Details","textarea",false]]},
 settings:{title:"Business Settings",desc:"Local business profile settings for this preview only; not shared across devices.",fields:[["businessName","Business name","text",true],["phone","Business WhatsApp","tel",false],["email","Business email","email",false],["address","Business address","text",false],["hours","Business hours","text",false],["currency","Currency","select",true,["PKR","USD","OMR","AED"]]]}

};
const storeKey="khansGypsumcraftSoftwarePrototype_v1";
let records=loadRecords(), currentPage="overview", editingId=null;
function loadRecords(){try{return JSON.parse(localStorage.getItem(storeKey))||{}}catch(e){return {}}}
function saveRecords(){localStorage.setItem(storeKey,JSON.stringify(records))}
function list(key){return Array.isArray(records[key])?records[key]:[]}
function esc(v){return String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function money(v){return "PKR "+Number(v||0).toLocaleString("en-PK")}
function total(key,field){return list(key).reduce((s,r)=>s+Number(r[field]||0),0)}
function setPage(key){
 currentPage=key;const m=modules[key];document.querySelectorAll(".nav-item").forEach(b=>{const on=b.dataset.page===key;b.classList.toggle("active",on);if(on)b.setAttribute("aria-current","page");else b.removeAttribute("aria-current")});
 const title=m?m.title:key==="reports"?"Reports":"Overview";
 document.getElementById("pageTitle").textContent=title;document.getElementById("breadcrumbPage").textContent=title;
 document.getElementById("pageSubtitle").textContent=m?m.desc:key==="reports"?"Review totals and export your business records.":"Your business activity at a glance.";
 document.getElementById("pageBody").innerHTML=key==="overview"?dashboard():key==="reports"?reports():modulePage(key);
 document.getElementById("sidebar").classList.remove("open");
}
function dashboard(){
 const cards=[["Customers",list("customers").length],["Active projects",list("projects").filter(x=>x.status==="In progress").length],["Open quotations",list("quotations").filter(x=>["Draft","Sent"].includes(x.status)).length],["Unpaid invoices",money(list("invoices").filter(x=>x.status!=="Paid").reduce((s,x)=>s+Number(x.amount||0),0))]];
 return '<div class="metric-grid">'+cards.map(c=>'<article class="metric-card"><span class="metric-label">'+c[0].toUpperCase()+'</span><strong>'+esc(c[1])+'</strong><small>Saved in this browser</small></article>').join("")+'</div><div class="content-grid"><section class="panel"><div class="panel-heading"><div><p class="eyebrow">WORKSPACE</p><h2>Business modules</h2></div></div><div class="quick-grid">'+Object.keys(modules).map(k=>'<button class="quick-tile" data-goto="'+k+'"><b>'+modules[k].title+'</b><small>'+modules[k].desc+'</small><span>Open module →</span></button>').join("")+'<button class="quick-tile" data-goto="reports"><b>Reports</b><small>View totals and download CSV files.</small><span>Open module →</span></button></div></section><section class="panel"><div class="panel-heading"><div><p class="eyebrow">RECENT ACTIVITY</p><h2>Latest records</h2></div></div>'+recentRecords()+'</section></div>';
}
function recentRecords(){
 const all=Object.keys(modules).flatMap(k=>list(k).map(r=>({kind:modules[k].title,name:r.name||r.customer||r.item||r.quoteNo||r.orderNo||r.invoiceNo||r.receiptNo||"Record",date:r.createdAt||"",id:r.id}))).sort((a,b)=>b.date.localeCompare(a.date)).slice(0,7);
 return all.length?'<div class="recent-list">'+all.map(x=>'<div class="recent-row"><span>'+esc(x.kind)+'</span><strong>'+esc(x.name)+'</strong><small>'+esc(x.date?new Date(x.date).toLocaleDateString():"Saved")+'</small></div>').join("")+'</div>':'<p class="empty-state">No records yet. Open a module and select “Add record” to begin.</p>';
}
function modulePage(key){
 const m=modules[key];if(!m)return "";
 const rows=list(key),search='<input class="search-input" id="tableSearch" type="search" placeholder="Search '+m.title.toLowerCase()+'...">';
 return '<section class="panel"><div class="toolbar"><div><p class="eyebrow">RECORD MANAGEMENT</p><h2>'+m.title+'</h2><p class="panel-copy">'+m.desc+'</p></div><div class="toolbar-actions">'+search+'<button class="button primary" id="addRecord">＋ Add record</button><button class="button secondary" id="exportCsv">Export CSV</button></div></div><div class="table-wrap"><table><thead><tr>'+m.fields.slice(0,5).map(f=>'<th>'+esc(f[1])+'</th>').join("")+'<th>Actions</th></tr></thead><tbody id="recordRows">'+renderRows(key,rows)+'</tbody></table></div><div class="table-foot"><span>'+rows.length+' record(s)</span><button class="text-button" id="clearSearch">Clear search</button></div></section>';
}
function renderRows(key,rows){
 const m=modules[key];if(!rows.length)return '<tr><td colspan="'+(Math.min(m.fields.length,5)+1)+'" class="empty-state">No records found. Add your first record.</td></tr>';
 return rows.map(r=>'<tr>'+m.fields.slice(0,5).map(f=>'<td>'+formatCell(f[0],r[f[0]])+'</td>').join("")+'<td><div class="row-actions"><button class="text-button" data-edit="'+esc(r.id)+'">Edit</button><button class="text-button danger" data-delete="'+esc(r.id)+'">Delete</button></div></td></tr>').join("");
}
function formatCell(k,v){if(v===undefined||v==="")return '<span class="muted">—</span>';if(k==="amount"||k==="budget"||k==="cost")return esc(money(v));if(k==="status")return '<span class="status-pill">'+esc(v)+'</span>';return esc(v)}
function reports(){
 const data=[["Customers",list("customers").length],["Projects",list("projects").length],["Quotations total",money(total("quotations","amount"))],["Orders total",money(total("orders","amount"))],["Invoices total",money(total("invoices","amount"))],["Payments received",money(total("payments","amount"))],["Inventory items",list("inventory").length]];
 return '<section class="panel"><div class="panel-heading"><div><p class="eyebrow">BUSINESS SUMMARY</p><h2>Reports overview</h2></div><div class="toolbar-actions"><button class="button secondary" id="backupJson">Download data backup</button><button class="button secondary" id="restoreBackup">Restore backup</button><input id="restoreFile" type="file" accept=".json,application/json" hidden></div></div><div class="report-grid">'+data.map(x=>'<article class="report-card"><span>'+esc(x[0])+'</span><strong>'+esc(x[1])+'</strong></article>').join("")+'</div><h3 class="section-title">Export records</h3><div class="export-list">'+Object.keys(modules).map(k=>'<div><span>'+modules[k].title+'</span><button class="text-button" data-export="'+k+'">Download CSV ↓</button></div>').join("")+'</div><p class="help-note">Figures are calculated from records saved in this browser only. They are not verified accounting statements.</p></section>';
}
function openForm(key,id){
 const m=modules[key];editingId=id||null;const old=id?list(key).find(x=>x.id===id)||{}:{};
 document.getElementById("modalTitle").textContent=(id?"Edit ":"Add ")+m.title.slice(0,-1);
 document.getElementById("formFields").innerHTML=m.fields.map(f=>{const [name,label,type,required,options]=f;let control=type==="textarea"?'<textarea name="'+name+'" placeholder="'+label+'" '+(required?"required":"")+'>'+esc(old[name]||"")+'</textarea>':type==="select"?'<select name="'+name+'" '+(required?"required":"")+'><option value="">Select...</option>'+options.map(o=>'<option '+(old[name]===o?"selected":"")+'>'+esc(o)+'</option>').join("")+'</select>':'<input name="'+name+'" type="'+type+'" placeholder="'+label+'" value="'+esc(old[name]||"")+'" '+(required?"required":"")+(type==="number"?' min="0" step="any"':"")+'>';return '<label>'+esc(label)+(required?' <em>*</em>':"")+control+'</label>'}).join("");
 document.getElementById("modalBackdrop").hidden=false;document.body.classList.add("modal-open");
}
function closeForm(){document.getElementById("modalBackdrop").hidden=true;document.body.classList.remove("modal-open");editingId=null}
function exportCsv(key){
 const m=modules[key],rows=list(key);const cols=m.fields.map(f=>f[0]);const csv=[cols.join(","),...rows.map(r=>cols.map(c=>'"'+String(r[c]??"").replace(/"/g,'""')+'"').join(","))].join("\r\n");
 download(new Blob(["\ufeff"+csv],{type:"text/csv;charset=utf-8"}),key+"-khans-gypsumcraft.csv");
}
function download(blob,name){const url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=name;a.click();URL.revokeObjectURL(url)}
document.querySelectorAll(".nav-item").forEach(b=>b.addEventListener("click",()=>setPage(b.dataset.page)));
document.getElementById("menuButton").addEventListener("click",()=>document.getElementById("sidebar").classList.toggle("open"));
document.getElementById("pageBody").addEventListener("click",e=>{
 const go=e.target.closest("[data-goto]");if(go)return setPage(go.dataset.goto);
 if(e.target.id==="addRecord")return openForm(currentPage);
 if(e.target.id==="exportCsv")return exportCsv(currentPage);
 const edit=e.target.closest("[data-edit]");if(edit)return openForm(currentPage,edit.dataset.edit);
 const del=e.target.closest("[data-delete]");if(del){if(confirm("Delete this record? This cannot be undone.")){records[currentPage]=list(currentPage).filter(r=>r.id!==del.dataset.delete);saveRecords();setPage(currentPage)}return}
 const exp=e.target.closest("[data-export]");if(exp)return exportCsv(exp.dataset.export);
 if(e.target.id==="backupJson"){download(new Blob([JSON.stringify({exportedAt:new Date().toISOString(),records},null,2)],{type:"application/json"}),"khans-business-backup.json")}\n if(e.target.id==="restoreBackup"){document.getElementById("restoreFile").click()}
 if(e.target.id==="clearSearch"){const s=document.getElementById("tableSearch");s.value="";setPage(currentPage)}
});
document.getElementById("pageBody").addEventListener("input",e=>{if(e.target.id==="tableSearch"){const q=e.target.value.toLowerCase();const rows=list(currentPage).filter(r=>Object.values(r).join(" ").toLowerCase().includes(q));document.getElementById("recordRows").innerHTML=renderRows(currentPage,rows)}});
document.getElementById("pageBody").addEventListener("change",e=>{if(e.target.id==="restoreFile"&&e.target.files&&e.target.files[0]){const file=e.target.files[0],reader=new FileReader();reader.onload=()=>{try{const backup=JSON.parse(reader.result);if(!backup.records||typeof backup.records!=="object"||Array.isArray(backup.records))throw new Error("Invalid backup");if(!confirm("Restore this backup? Current local records will be replaced."))return;records=backup.records;saveRecords();setPage("reports");alert("Backup restored in this browser.")}catch(err){alert("This backup file is not valid.")}e.target.value=""};reader.readAsText(file)}});
document.getElementById("recordForm").addEventListener("submit",e=>{
 e.preventDefault();const key=currentPage,form=new FormData(e.currentTarget),obj={};for(const [k,v] of form.entries())obj[k]=v.trim();for(const f of modules[key].fields)if(f[2]==="number"&&obj[f[0]]!=="")obj[f[0]]=Number(obj[f[0]]);
 const rows=list(key);if(editingId){const i=rows.findIndex(r=>r.id===editingId);if(i>=0)rows[i]={...rows[i],...obj,updatedAt:new Date().toISOString()}}else rows.unshift({...obj,id:crypto.randomUUID?crypto.randomUUID():String(Date.now()),createdAt:new Date().toISOString()});
 records[key]=rows;saveRecords();closeForm();setPage(key);
});
document.getElementById("closeModal").addEventListener("click",closeForm);document.getElementById("cancelModal").addEventListener("click",closeForm);
document.getElementById("modalBackdrop").addEventListener("click",e=>{if(e.target.id==="modalBackdrop")closeForm()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeForm()});
setPage("overview");
