const container=document.getElementById("output-visualizer");
const flex_direction_input=document.getElementById("flex-direction-value");
const flex_wrap_input=document.getElementById("flex-wrap-value");
const justify_content_input=document.getElementById("justify-content-value");
const align_items_input=document.getElementById("align-items-value");
const align_content_input=document.getElementById("align-content-value");
let flexWrapFlag=false;

const noWrapContent=document.createElement("div").id="output-visualizer";
noWrapContent.innerHTML=container.innerHTML;

// TODO: Apply smooth Transition Effect
function flexDirection(){
    container.style.flexDirection=flex_direction_input.value;
}
function flexWrap(){
    container.style.flexWrap=flex_wrap_input.value;
    if(flexWrapFlag===false && 
        (flex_wrap_input.value==='wrap' || flex_wrap_input.value==='wrap-reverse'))
        {
        container.innerHTML="";
        container.innerHTML=`
            <div class="div-section" id="div-1">1</div>
            <div class="div-section" id="div-2">2</div>
            <div class="div-section" id="div-3">3</div>
            <div class="div-section" id="div-1">1</div>
            <div class="div-section" id="div-2">2</div>
            <div class="div-section" id="div-3">3</div>
            <div class="div-section" id="div-1">1</div>
            <div class="div-section" id="div-2">2</div>
            <div class="div-section" id="div-3">3</div>
            `;
        flexWrapFlag=true;
        align_content_input.disabled=false;
    }
    if(flexWrapFlag===true && flex_wrap_input.value==='nowrap'){
        flexWrapFlag=false;
        align_content_input.disabled=true;
    }
}
function justifyContent(){
    container.style.justifyContent=justify_content_input.value;
}
function alignItems(){
    container.style.alignItems=align_items_input.value;
}
function alignContent(){
    container.style.alignContent=align_content_input.value;
}
// Function to reset all flex properties to its default value
function reset_default(){
    flexDirection_Reset();
    flexWrap_Reset();
    justifyContent_Reset();
    alignItems_Reset();
    alignContent_Reset();
}


// Individual property reset functions
function flexDirection_Reset(){
    flex_direction_input.value='row';
    container.style.flexDirection='row';
}
function flexWrap_Reset(){
    flex_wrap_input.value='nowrap';
    container.innerHTML=`
        <div class="div-section" id="div-1">1</div>
        <div class="div-section" id="div-2">2</div>
        <div class="div-section" id="div-3">3</div>`;
    flexWrapFlag=false;
    container.style.flexWrap='no-wrap';
}
function justifyContent_Reset(){
    justify_content_input.value='flex-start';
    container.style.justifyContent='flex-start';
}
function alignItems_Reset(){
    align_items_input.value='stretch';
    container.style.alignItems='stretch';
}
function alignContent_Reset(){
    align_content_input.value='stretch';
    container.style.alignContent='stretch';
    if(flexWrapFlag===false){
        align_content_input.disabled=true;
    }
    else{
        align_content_input.disabled=false;
    }
    
}