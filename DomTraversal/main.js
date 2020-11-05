//generator
const computerDataIds = []
$(".generator").on("click", function () {
    const ElementId = $(this).closest(".processor").attr("id")  
    const Bus = $(this).closest(".computer").find(".BUS").text()
    const DataId = $(this).closest(".computer").data("id")
    computerDataIds.push(DataId)
    console.log(ElementId)
    console.log(Bus)
    console.log(DataId)    
})
//Validator
$(".validator").on("click", function (){
    const generatorText = $(this).closest(".computer").find(".generator").text()  
    const MB = $(this).closest(".computer").find(".MB").text()
    const QR1 =$(this).closest(".computer").find("span:first-child").text()   
    const QR2 = $(this).closest(".computer").find("span:first-child").next().text()
    console.log(generatorText)
    console.log(QR1)
    console.log(MB)
    console.log(QR2)    
})
