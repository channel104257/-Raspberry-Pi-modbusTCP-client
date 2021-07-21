const moment = require('moment')

// create an empty modbus client
const ModbusRTU = require("modbus-serial")
const client = new ModbusRTU();

// open connection to a tcp line
// 創建Modbus TCP連接，server端IP是X.X.X.X,端口502
client.connectTCP("X.X.X.X", { port: 502 });

// 每隔5秒讀取保持寄存器的值，從寄存器地址1開始讀取，讀25个寄存器到data矩陣中
setInterval( () => {
    client.readHoldingRegisters(1, 25, (err, data) => {
        // 取得當前時間
        console.log("----------------------------------------------------------------------");
        console.log("系統時間：" + moment().format('YYYY年MM月DD日 HH:mm:ss'));
        console.log("Temperature:" + data.data[0]*0.01 + "oC");	// data對應的寄存器地址為1
        console.log("Humidity:" + data.data[2]*0.01 + "%");	// data對應的寄存器地址為3
        console.log("CO2:" + data.data[20] + "ppm");	// data對應的寄存器地址為21
        console.log("----------------------------------------------------------------------");
    });
}, 5000);
