# Raspberry-Pi-modbusTCP-client
###### tags `Raspberry Pi` `Node.js`
本專案利用**Node.js**在樹梅派上進行開發

請事先下載`momoent`及`modbus-serial`兩個模組<br>
momoent : https://www.npmjs.com/package/moment<br>
modbus-serial : https://www.npmjs.com/package/modbus-serial<br>

可使用Modbus Slave進行測試

### 參考表格-server端資料
No  |Register number 1-based |Register hex address |Content          |R/W |Signed unsigned   |Scaling | Unit
--- |------------------------|-------------------- |----             |--- |----------------  |--------|------
1   |40001                   |0x0000               |Temperature      |R   |signed integer    |1:100   |℃,°F
2   |40003                   |0x0002               |Relative humidity|R   |unsigned integer  |1:100   |%
3   |40021                   |0x0014               |Temperature      |R   |unsigned integer  |1:1     |ppm
