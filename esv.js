//curl -X GET --header 'Accept: application/json' --header 'Authorization: Token a23824c69af78a425dd3fbcef39eaf61e2ffd834'
//Mark 77 1-11 ???
// var verses= ['Luke2%3A49','Matthew3%3A15', 'Mark1%3A15', 'Matthew4%3A4', 'Mark1%3A13', 'Luke4%3A1-13', 'John1%3A19-20', 'John1%3A22-29', 'John1%3A37-51', 'John2%3A1-9', 'John2%3A12-16', 'John2%3A18-21', 'John3%3A1-21', 'John3%3A22', 'John28%3A1-40', 'John4%3A43-53', 'John5%3A1-47', 'Luke4%3A16-31', 'Mark1%3A15', 'Matthew4%3A17', 'Mark1%3A16-26', 'Luke4%3A31', 'Luke4%3A38', 'Luke4%3A44', 'Matthew4%3A17', 'Matthew4%3A25', 'Matthew5%3A1-48', 'Matthew6%3A1-34', 'Matthew7%3A1-29', 'Matthew8%3A1-4', 'Matthew9%3A2-7', 'Mark1%3A40-45', 'Mark2%3A1-12', 'Luke5%3A1-15', 'Luke5%3A18-25', 'Luke5%3A27-39', 'Matthew9%3A9-17', 'Mark2%3A13-22', 'Matthew12%3A1-16', 'Mark2%3A23-38', 'Mark3%3A1-15', 'Mark3%3A22-29', 'Luke6%3A1-13', 'Luke11%3A24-26', 'Matthew10%3A2-4', 'Mark3%3A16-19', 'Luke6%3A14-38', 'Luke6%3A39-49', 'Matthew8%3A5-13', 'Luke7%3A11-18', 'Matthew11%3A2-15', 'Matthew11%3A16-19', 'Luke7%3A24-35', 'Matthew11%3A20-30', 'Luke10%3A13-15', 'Luke7%3A36-50', 'Matthew12%3A22-37', 'Luke11%3A17-23', 'Mark3%3A22-39', 'Matthew12%3A38-45', 'Matthew12%3A46-50', 'Matthew13%3A1-30', 'Mark3%3A31-35', 'Mark4%3A1-29', 'Luke8%3A4-18', 'Luke8%3A19-21', 'Mark4%3A30-34', 'Mark4%3A35-41', 'Matthew13%3A31-34', 'Matthew13%3A36-52', 'Luke13%3A18-21', 'Luke8%3A22-25', 'Mark5%3A1-20', 'Luke8%3A26-40', 'Matthew8%3A28-34', 'Luke9%3A41-42', 'Luke9%3A49-56', 'Luke9%3A43-48', 'Mark5%3A22-24', 'Mark5%3A35-43', 'Mark5%3A25-34', 'Matthew9%3A18-19', 'Matthew9%3A23-26', 'Matthew9%3A27-30', 'Mark6%3A1-6', 'Mark6%3A7-13', 'Matthew13%3A54-58', 'Matthew9%3A35-38', 'Matthew10%3A5-42', 'Luke9%3A1-6', 'Matthew14%3A1-4', 'Matthew14%3A13-14', 'Luke9%3A7-11', 'Mark6%3A17-18', 'Mark6%3A30-33', 'John6%3A1-3', 'John6%3A5-13', 'Matthew14%3A15-21', 'Mark6%3A35-44', 'Luke9%3A12-17', 'Matthew14%3A22-32', 'Mark6%3A45-53', 'John6%3A15-21', 'John6%3A22-71', 'Mark7%3A1-23', 'Matthew15%3A1-20', 'Matthew15%3A21-28', 'Mark7%3A24-36', 'Mark8%3A1-26', 'Matthew15%3A32-39', 'John6%3A1-12', 'Matthew16%3A13-28', 'Mark8%3A27-38', 'Mark9%3A1', 'Luke9%3A18-27', 'Luke9%3A28-42', 'Matthew17%3A1-21', 'Mark9%3A2-29', 'Mark9%3A30-37', 'Luke9%3A44-48', 'Matthew17%3A22-27', 'Mark9%3A38-50', 'Luke9%3A49-50', 'Matthew18%3A1-35', 'John7%3A1-46', 'John7%3A53', 'John8%3A1', 'John8%3A2-59', 'John9%3A1-41', 'John10%3A1-18', 'John10%3A22-40', 'Luke9%3A51-62', 'Luke10%3A1-24', 'Luke10%3A25-37', 'Luke11%3A1-13', 'Luke11%3A27-54', 'Luke12%3A1-40', 'Luke12%3A41-59', 'Luke13%3A1-9', 'Luke13%3A10-21', 'Luke13%3A22-35', 'Luke10%3A38-42', 'John10%3A39-40', 'Luke14%3A1-35', 'Luke15%3A1-32', 'Luke16%3A1-31', 'Luke17%3A1-10', 'John11%3A1-54', 'Luke17%3A11-37', 'Luke18%3A1-8', 'Luke18%3A9-30', 'Mark10%3A13-31', 'Matthew19%3A13-30', 'Matthew20%3A1-16', 'Mark10%3A1-12', 'Matthew19%3A1-12', 'Matthew20%3A17-28', 'Mark10%3A32-45', 'Luke18%3A31-34', 'Luke18%3A35-43', 'Luke19%3A1-27', 'Mark10%3A46-52', 'John11%3A55-57', 'Matthew21%3A1-6', 'Luke19%3A28-44','Mark11%3A12-26', 'Matthew21%3A12-13', 'Matthew21%3A18-22', 'Luke19%3A45-48', 'Matthew21%3A23-46', 'Mark11%3A27-33', 'Matthew12%3A1-12', 'Luke20%3A1-19', 'Matthew22%3A1-32', 'Mark12%3A13-27', 'Luke20%3A20-38', 'Matthew22%3A34-46', 'Mark12%3A28-44', 'Luke20%3A41-47', 'Luke21%3A1-4', 'Matthew23%3A1-39', 'John12%3A20-36', 'John12%3A42-50', 'Matthew24%3A1-31', 'Mark13%3A1-27', 'Luke21%3A5-28', 'Matthew24%3A32-51', 'Matthew25%3A1-13', 'Mark13%3A28-37', 'Luke21%3A29-36', 'Matthew25%3A14-46', 'John12%3A1-11', 'Matthew26%3A6-13', 'Mark14%3A3-9', 'Luke21%3A37-38', 'Luke22%3A1-18', 'Matthew26%3A1-5', 'Matthew26%3A14-20', 'Mark14%3A1-2', 'Mark14%3A10-17', 'John13%3A2-17', 'Corinthians11%3A24-25', 'Matthew26%3A21-29', 'Mark14%3A18-25', 'Luke22%3A19-38', 'John13%3A18-38', 'John14%3A1-4', 'John14%3A5-31', 'John15%3A1-27', 'John16%3A1', 'John16%3A2-33', 'John17%3A1-26', 'Matthew26%3A30-47', 'Mark14%3A26-43', 'Luke22%3A39-47', 'John18%3A1-9', 'Matthew26%3A48-58', 'Mark14%3A44-50', 'Mark14%3A53-54', 'Luke22%3A47-55', 'John18%3A10-16', 'John18%3A19-23', 'Matthew26%3A59-75', 'Matthew27%3A1-7', 'Mark14%3A55-72', 'Luke22%3A56-71', 'John18%3A17-27', 'John18%3A28-40', 'John19%3A1-16', 'Luke23%3A1-11', 'Luke23%3A13-25', 'Mark15%3A1-15', 'Matthew27%3A11-26', 'Matthew27%3A27-38', 'Mark15%3A16-27', 'Luke23%3A26-34', 'John19%3A17-20', 'Matthew27%3A39-56', 'Mark15%3A29-41', 'Luke23%3A35-49', 'John19%3A23-30', 'Mark15%3A42-47', 'Luke23%3A50-56', 'John19%3A38-42', 'Matthew27%3A57-66', 'Matthew28%3A1', 'Matthew28%3A8-10', 'Mark16%3A1-11', 'Luke24%3A1-9', 'John20%3A11-18', 'Mark16%3A12-13', 'Luke24%3A13-31', 'Luke24%3A33-43', 'John20%3A19-29', 'John21%3A1-25', 'Matthew28%3A16-20', 'Mark16%3A12-18', 'Luke24%3A44-53', 'Acts1%3A12', 'Acts1%3A2-9', 'Acts8%3A3', 'Acts9%3A1-20', 'Acts10%3A44-45', 'Acts11%3A16', 'Acts18%3A7-11', 'Acts20%3A17-19', 'Acts20%3A22', 'Acts20%3A25', 'Acts20%3A32-38', 'Acts26%3A1-32', 'Corinthians12%3A7-9', 'Revelation1%3A1-3', 'Revelation1%3A9-20', 'Revelation2%3A1-7', 'Revelation2%3A8-11', 'Revelation2%3A12-17', 'Revelation2%3A18-29', 'Revelation3%3A1-6', 'Revelation3%3A7-13', 'Revelation3%3A14-22', 'Revelation4%3A1-2', 'Revelation14%3A13', 'Revelation16%3A15', 'Revelation19%3A9-10', 'Revelation21%3A5-8', 'Revelation22%3A6-21']

//481 length
var verses = ['Matthew3%3A15', 'Matthew4%3A4', 'Matthew4%3A7', 'Matthew4%3A10', 'Matthew4%3A17', 'Matthew4%3A19', 'Matthew5%3A3-48', 'Matthew6%3A1-27', 'Matthew8%3A3-4', 'Matthew8%3A7', 'Matthew8%3A10-13', 'Matthew8%3A20', 'Matthew8%3A22', 'Matthew8%3A26', 'Matthew8%3A32', 'Matthew9%3A2', 'Matthew9%3A4-6', 'Matthew9%3A9', 'Matthew9%3A12-13'
, 'Matthew9%3A15-17', 'Matthew9%3A22', 'Matthew9%3A24', 'Matthew9%3A28-30', 'Matthew9%3A37', 'Matthew10%3A5-42', 'Matthew11%3A4-19', 'Matthew11%3A21-30', 'Matthew12%3A3-8', 'Matthew12%3A11-13', 'Matthew12%3A25-37', 'Matthew12%3A39-45', 'Matthew12%3A48-50', 'Matthew13%3A3-9', 'Matthew13%3A11-33', 'Matthew13%3A37-52', 'Matthew13%3A57', 'Matthew14%3A16', 'Matthew14%3A18', 'Matthew14%3A27',
 'Matthew14%3A29', 'Matthew14%3A31', 'Matthew15%3A3-11', 'Matthew15%3A16-20', 'Matthew15%3A24', 'Matthew15%3A26', 'Matthew15%3A28', 'Matthew15%3A32', 'Matthew15%3A34', 'Matthew16%3A2-4', 'Matthew16%3A6', 'Matthew16%3A8-11', 'Matthew16%3A13', 'Matthew16%3A15', 'Matthew16%3A17-19', 'Matthew16%3A23-28', 'Matthew17%3A7', 'Matthew17%3A9', 'Matthew17%3A11-12', 'Matthew17%3A17',
 'Matthew17%3A20-23', 'Matthew17%3A25-27', 'Matthew18%3A3-20', 'Matthew18%3A22-35', 'Matthew19%3A4-6', 'Matthew19%3A8-10', 'Matthew19%3A11-12', 'Matthew19%3A14', 'Matthew19%3A17-19', 'Matthew19%3A21', 'Matthew19%3A23-24', 'Matthew19%3A26', 'Matthew19%3A28-30', 'Matthew20%3A1-16', 'Matthew20%3A18-19', 'Matthew20%3A21-23', 'Matthew20%3A25-28', 'Matthew20%3A32'
,'Matthew21%3A2-3', 'Matthew21%3A13', 'Matthew21%3A16', 'Matthew21%3A19', 'Matthew21%3A21-22', 'Matthew21%3A24-25', 'Matthew21%3A27-40', 'Matthew21%3A42-44', 'Matthew22%3A2-14', 'Matthew22%3A18-21', 'Matthew22%3A29-32', 'Matthew22%3A37-40', 'Matthew22%3A42-45', 'Matthew23%3A2-39', 'Matthew24%3A2', 'Matthew24%3A4-51', 'Matthew25%3A1-46', 'Matthew26%3A2', 'Matthew26%3A10-13', 'Matthew26%3A18',
'Matthew26%3A21', 'Matthew26%3A23-29', 'Matthew26%3A31-32', 'Matthew26%3A34', 'Matthew26%3A36', 'Matthew26%3A38-42', 'Matthew26%3A45-46', 'Matthew26%3A50', 'Matthew26%3A52-56', 'Matthew26%3A64', 'Matthew26%3A75', 'Matthew27%3A46', 'Matthew28%3A10', 'Matthew28%3A18-20',
'Mark1%3A15', 'Mark1%3A17', 'Mark1%3A25', 'Mark1%3A28', 'Mark1%3A41', 'Mark1%3A44', 'Mark2%3A5', 'Mark2%3A8-11', 'Mark2%3A14', 'Mark2%3A17', 'Mark2%3A19-22', 'Mark2%3A25-28', 'Mark3%3A3-5', 'Mark3%3A23-29', 'Mark3%3A33-35', 'Mark4%3A3-9', 'Mark4%3A11-32', 'Mark4%3A35', 'Mark4%3A39-40', 'Mark5%3A8-9',
'Mark5%3A19', 'Mark5%3A30', 'Mark5%3A34', 'Mark5%3A36', 'Mark5%3A39', 'Mark5%3A41', 'Mark6%3A4', 'Mark6%3A9-11', 'Mark6%3A31', 'Mark6%3A37', 'Mark6%3A38', 'Mark6%3A50', 'Mark7%3A6-16', 'Mark7%3A18-23', 'Mark7%3A27', 'Mark7%3A29', 'Mark7%3A34', 'Mark8%3A2-3', 'Mark8%3A5', 'Mark8%3A12',
'Mark8%3A15', 'Mark8%3A17-21', 'Mark8%3A23', 'Mark8%3A26', 'Mark8%3A27', 'Mark8%3A29', 'Mark8%3A33-38', 'Mark9%3A1', 'Mark9%3A12-13', 'Mark9%3A16', 'Mark9%3A19', 'Mark9%3A21', 'Mark9%3A23', 'Mark9%3A25', 'Mark9%3A29', 'Mark9%3A31', 'Mark9%3A33', 'Mark9%3A35', 'Mark9%3A37', 'Mark9%3A39-49',
'Mark10%3A3', 'Mark10%3A5-9', 'Mark10%3A11-12', 'Mark10%3A14-15', 'Mark10%3A18-19', 'Mark10%3A21', 'Mark10%3A23-25', 'Mark10%3A27', 'Mark10%3A29-31', 'Mark10%3A33-34', 'Mark10%3A36', 'Mark10%3A38-40', 'Mark10%3A42-45', 'Mark10%3A49', 'Mark10%3A51-52', 'Mark11%3A2-3', 'Mark11%3A14', 'Mark11%3A17', 'Mark11%3A22-26', 'Mark11%3A29-30',
'Mark11%3A33', 'Mark12%3A1-11', 'Mark12%3A15-17', 'Mark12%3A24-27', 'Mark12%3A29-31', 'Mark13%3A34-40', 'Mark13%3A43-44', 'Mark13%3A2', 'Mark13%3A5-37', 'Mark14%3A6-9', 'Mark14%3A13-15', 'Mark14%3A18', 'Mark14%3A20-21', 'Mark14%3A22', 'Mark14%3A24-25', 'Mark14%3A27-28',
'Mark14%3A30', 'Mark14%3A32', 'Mark14%3A34', 'Mark14%3A36-38', 'Mark14%3A41-42', 'Mark14%3A48-49', 'Mark14%3A62', 'Mark14%3A72', 'Mark15%3A2', 'Mark15%3A34', 'Mark16%3A15-18',
'Luke4%3A4', 'Luke4%3A8', 'Luke4%3A12', 'Luke4%3A18-19', 'Luke4%3A21', 'Luke4%3A23-27', 'Luke4%3A35', 'Luke4%3A43', 'Luke5%3A4', 'Luke5%3A10', 'Luke5%3A13-14', 'Luke5%3A20', 'Luke5%3A22-24', 'Luke5%3A27', 'Luke5%3A31-32', 'Luke5%3A34-39', 'Luke6%3A3-5', 'Luke6%3A8-10', 'Luke6%3A20-49',
'Luke7%3A9', 'Luke7%3A13-14', 'Luke7%3A22-28', 'Luke7%3A31-35', 'Luke7%3A40-48', 'Luke7%3A50', 'Luke8%3A5-8', 'Luke8%3A10-18', 'Luke8%3A21', 'Luke8%3A22', 'Luke8%3A25', 'Luke8%3A30', 'Luke8%3A39', 'Luke8%3A45-46', 'Luke8%3A48', 'Luke8%3A50', 'Luke8%3A52', 'Luke8%3A54', 'Luke9%3A3-5', 'Luke9%3A13-14',
'Luke9%3A18', 'Luke9%3A20', 'Luke9%3A22-27', 'Luke9%3A41', 'Luke9%3A44', 'Luke9%3A48', 'Luke9%3A50', 'Luke9%3A55-56', 'Luke9%3A58-62', 'Luke10%3A2-16', 'Luke10%3A18-24', 'Luke10%3A26', 'Luke10%3A28', 'Luke10%3A30-37', 'Luke10%3A41-42', 'Luke11%3A2-13',
'Luke11%3A17-26', 'Luke11%3A28-36', 'Luke11%3A39-44', 'Luke11%3A46-52', 'Luke12%3A1-12', 'Luke12%3A14-40', 'Luke12%3A41-59', 'Luke13%3A2-9', 'Luke13%3A12', 'Luke13%3A15-16', 'Luke13%3A18-21', 'Luke13%3A24-30', 'Luke13%3A32-35', 'Luke14%3A3', 'Luke14%3A5',
'Luke14%3A8-14', 'Luke14%3A16-24', 'Luke14%3A26-35', 'Luke15%3A4-32', 'Luke16%3A1-13', 'Luke16%3A15-31', 'Luke17%3A1-4', 'Luke17%3A6-10', 'Luke17%3A14', 'Luke17%3A17-37', 'Luke18%3A2-8', 'Luke18%3A10-14', 'Luke18%3A16-17', 'Luke18%3A19-20', 'Luke18%3A22', 'Luke18%3A24-25', 'Luke18%3A27', 'Luke18%3A29-33', 'Luke18%3A41-42', 'Luke19%3A5',
'Luke19%3A9-10', 'Luke19%3A12-27', 'Luke19%3A30-31', 'Luke19%3A40', 'Luke19%3A42-44', 'Luke19%3A46', 'Luke20%3A3-4', 'Luke20%3A8-18', 'Luke20-24-25', 'Luke20%3A34-38', 'Luke20%3A41-47', 'Luke21%3A3-4', 'Luke21%3A6', 'Luke21%3A8-36', 'Luke22%3A8', 'Luke22%3A10-12', 'Luke22%3A15-22', 'Luke22%3A25-32', 'Luke22%3A34-38', 'Luke22%3A40',
'Luke22%3A42', 'Luke22%3A46', 'Luke22%3A48', 'Luke22%3A51-53', 'Luke22%3A61', 'Luke22%3A67-70', 'Luke23%3A3', 'Luke23%3A28-31', 'Luke32%3A34', 'Luke23%3A43', 'Luke23%3A46', 'Luke24%3A17', 'Luke24%3A19', 'Luke24%3A25-26', 'Luke24%3A36', 'Luke24%3A38-39', 'Luke24%3A41', 'Luke24%3A44', 'Luke24%3A46-49',
'John1%3A38-39', 'John1%3A42-43', 'John1%3A47-48', 'John1%3A50-51', 'John2%3A4', 'John2%3A7-8', 'John2%3A16', 'John2%3A19', 'John3%3A3', 'John3%3A5-8', 'John3%3A10-21', 'John4%3A7', 'John4%3A10', 'John4%3A13-14', 'John4%3A16-18', 'John4%3A21-24', 'John4%3A32', 'John4%3A34-38', 'John4%3A48', 'John4%3A50',
'John4%3A53', 'John5%3A6', 'John5%3A8', 'John5%3A11-12', 'John5%3A14', 'John5%3A17', 'John5%3A19-47', 'John6%3A5', 'John6%3A10', 'John6%3A12', 'John6%3A20', 'John6%3A26-27', 'John6%3A29', 'John6%3A32-33', 'John6%3A35-51', 'John6%3A53-58', 'John6%3A61-65', 'John6%3A67', 'John6%3A70', 'John7%3A6-8',
 'John7%3A16-19', 'John7%3A21-24', 'John7%3A28-29', 'John7%3A33-34', 'John7%3A36-38', 'John8%3A7', 'John8%3A10-12', 'John8%3A14-19', 'John8%3A21-29', 'John8%3A31-47', 'John8%3A49-52', 'John8%3A54-56', 'John8%3A58', 'John9%3A3-5', 'John9%3A7', 'John9%3A11', 'John9%3A35', 'John9%3A37', 'John9%3A39', 'John9%3A41',
 'John10%3A1-5', 'John10%3A7-18', 'John10%3A25-30', 'John10%3A32', 'John10%3A34-38', 'John11%3A4', 'John11%3A7', 'John11%3A9-11', 'John11%3A14-15', 'John11%3A23', 'John11%3A25-26', 'John11%3A34', 'John11%3A39', 'John11%3A40-44', 'John12%3A7-8', 'John12%3A23-28', 'John12%3A30-32', 'John12%3A34-36', 'John12%3A44-50',
 'John13%3A7-8', 'John13%3A10-21', 'John13%3A26', 'John13%3A27', 'John13%3A31-38', 'John14%3A1-4', 'John14%3A6-21', 'John14%3A23-31', 'John15%3A1-27', 'John16%3A1-28', 'John16%3A31-33', 'John17%3A1-26', 'John18%3A4-9', 'John18%3A11', 'John18%3A20-21', 'John18%3A23', 'John18%3A34', 'John18%3A36-37', 'John19%3A11', 'John19%3A26-28',
 'John19%3A30', 'John20%3A15-17', 'John20%3A19', 'John20%3A21-23', 'John20%3A26-29', 'John21%3A5-6', 'John21%3A10', 'John21%3A12', 'John21%3A15-19', 'John21%3A22', 'John21%3A23',
 'Acts1%3A4-5', 'Acts1%3A7', 'Acts9%3A4-6', 'Acts9%3A10-12', 'Acts9%3A15-16', 'Acts11%3A16', 'Acts18%3A9-10', 'Acts21%3A35', 'Acts22%3A7-8', 'Acts22%3A10', 'Acts22%3A18', 'Acts22%3A21', 'Acts23%3A11', 'Acts26%3A14-18', 'Corinthians11%3A24-25', 'Revelation1%3A8', 'Revelation1%3A11', 'Revelation1%3A17-20', 'Revelation2%3A1-29', 'Revelation3%3A1-22',
 'Revelation22%3A7', 'Revelation22%3A12-13', 'Revelation22%3A16', 'Revelation22%3A20']
//var urls = verses.map(verse => 'https://api.esv.org/v3/passage/text/?q=' + verse);
var urls= 'https://api.esv.org/v3/passage/text/?q=' + verses.join();
//verses.forEach(v => {
//    fetch(myRequest)
//    .then(resp => {
//        return resp.json();
//    }).then(json => {
//        console.log(json);
//    });
//
//})

var myHeaders = new Headers({
    "Accept": "application/json",
    "Authorization": "Token a23824c69af78a425dd3fbcef39eaf61e2ffd834"
});

var myInit= {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
};
//var request= 'https://api.esv.org/v3/passage/text/?q=' + v
//var request= 'https://api.esv.org/v3/passage/text/?q=Luke2%3A40-52'

var myRequest = new Request(urls, myInit);

fetch(myRequest)
    .then(resp => {
        return resp.json();
    }).then(json => {
        console.log(json);
    });

//var promises = urls.map(url => fetch(myRequest).then(y=> y.text()));
//Promise.all(promises).then(results =>{
//    console.log(results);
//})


//Matthew 3, 1-6; 13-17: Mark 1, 10-11; Luke 3, 22-23
//Matthew 4, 1-11: Mark 1, 13: Luke 4, 1-13
//John, 1, 19-20 . . . 22-29 . . . 37-51
//John 2, 1-9; 12-16; 18-21.
//John 3, 1-21.
//John 3, 22 . . . 28; 1-40.
//John 4, 43-53.
//John 5, 1-47.
//Luke 4, 16-31; Mark 1, 15; Matthew 4, 17.
//Mark 1, 16-26; Luke 4, 31 . . . 38 . . . 44; Matthew 4, 17 . . . 25.
//Matthew 5, 1-48.
//Matthew 6, 1-34.
//Matthew 7, 1-29.//
//Matthew 8, 1-4; 9, 2-7; Mark 1, 40-45; 2, 1-12; Luke 5, 1-15; and 18-25.//
//Luke 5, 27-39; Matthew 9, 9-17; Mark 2, 13-22.//
//Matthew 12, 1-16: Mark 2, 23-28; 3, 1-15; 22-29: Luke 6, 1-13; 11, 24-26.//
//Matthew 10, 2-4: Mark 3, 16-19: Luke 6, 14-38.//
//Luke 6, 39-49.
//Matthew 8, 5-13: Luke 7, 11-18//      .
//Matthew 11, 2-15; 16-19: Luke 7, 24-35.//
//Matthew 11, 20-30: Luke 10, 13-15.
//Luke 7, 36-50.
//Matthew 12, 22-37: Luke 11, 17-23: Mark 3, 22-29.//
//Matthew 12, 38-45.
//Matt. 12, 46-50; 13, 1-30; Mark 3, 31-35; 4, 1-29: Luke 8, 4-18; 19-21.
//Mk. 4, 30-34; 35-41: Matt. 13, 31-34; 36-52: Lk. 13, 18-21; 8, 22-25.//
//Mark 5, 1-20: Luke 8, 26-40: Matthew 8, 28-34.
//Luke 9, 41-42; 49-56; 43-48: Mark 5, 22-24; 35-43; 25-34: Matthew 9, 18-19; 23-26; 27-30.//
//Mark 6, 1-6, 7-13: Matthew 13, 54-58; 9, 35-38; 10, 5-42: Luke 9, 1-6.//
//Matthew 14, 1-4; 13-14: Luke 9, 7-11: Mark 6, 17-18; 30-33: John 6, 1-3.
//John 6, 5-13: Matthew 14, 15-21: Mark 6, 35-44: Luke 9, 12-17.//
//Matthew 14, 22-32: Mark 6, 45-53: John 6, 15-21.//
//John 6, 22-71.//
//Mark 7, 1-23: Matthew 15, 1-20.
//Matthew 15, 21-28: Mark 7, 24-36.//
//Mark 8, 1-26: Matthew 15, 32-39; John 6, 1-12.//
//Matthew 16, 13-28: Mark 8, 27-38; 9, 1: Luke 9, 18-27. *//
//Luke 9, 28-42: Matthew 17, 1-21: Mark 9, 2-29.
//Mark 9, 30-37: Luke 9, 44-48: Matthew 17, 22-27.//
//Mark 9, 38-50: Luke 9, 49-50.//
//Matthew 18, 1-35.//
//John 7, 1-46, 53; 8, 1.
//John 8, 2-59.
//John 9, 1-41; 10, 1-18; 22-40.
//Luke 9, 51-62; 10, 1-24//
//Luke 10, 25-37.
//Luke 11, 1-13; 27-54.
//Luke 12, 1-40.
//Luke 12, 41-59; 13, 1-9.
//Luke 13, 10-21.
//Luke 13, 22-35; 10, 38-42: John 10, 39-40.
//Luke 14, 1-35.
//Luke 15, 1-32.
//Luke 16, 1-31.
//Luke 17, 1-10: John 11, 1-54.
//Luke 17, 11-37; 18, 1-8.//
//Luke 18, 9-30: Mark 10, 13-31: Matthew 19, 13-30; and 20, 1-16.//
//Mark 10, 1-12: Matthew 19, 1-12.
//Matthew 20, 17-28: Mark 10, 32-45: Luke 18, 31-34.
//Luke 18, 35-43; 19, 1-27: Mark 10, 46-52.//
//John 11, 55-57: Matthew 21, 1-6: Luke 19, 28-44.  //LXIV   FARING TOWARD JERUSALEM AMIDST HOSANNAS—JESUS WEEPS FORETELLING JERUSALEM'S FATE
//Mark 11, 12-26: Matthew 21, 12-13; 18-22: Luke 19, 45-48.
//Matthew 21, 23-46: Mark 11, 27-33; 12, 1-12: Luke 20, 1-19.//
//Matthew 22, 1-32: Mark 12, 13-27: Luke 20, 20-38.//
//Matthew 22, 34-46: Mark 12, 28-44: Luke 20, 41-47; 21, 1-4.//
//Matthew 23, 1-39.//
//John 12, 20-36; 42-50.
//Matthew 24, 1-31: Mark 13, 1-27: Luke 21, 5-28.//
//Matthew 24, 32-51; 25, 1-13: Mark 13, 28-37: Luke 21, 29-36.//
//Matthew 25, 14-46.
//John 12, 1-11: Matthew 26, 6-13: Mark 14, 3-9.
//Luke 21, 37-38; 22, 1-18: Matthew 26, 1-5; 14-20: Mark 14, 1-2; 10-17: John 13, 2-17.//
//Paul I. Corinthians 11, 24-25: Matthew 26, 21-29: Mark 14, 18-25: Luke 22, 19-38: John 13, 18-38; 14, 1-4.
//John 14, 5-31.
//John 15, 1-27; 16, 1.
//John 16, 2-33.
//John 17, 1-26.
//Matthew 26, 30-47: Mark 14, 26-43: Luke 22, 39-47: John 18, 1-9.//
//Matthew 26, 48-58: Mark 14, 44-50; 53-54: Luke 22, 47-55: John 18, 10-16; 19-23.//
//Matthew 26, 59-75; 27, 1-7: Mark 14, 55-72: Luke 22, 56-71: John 18, 17-27.//
//John 18, 28-40; 19, 1-16: Luke 23, 1-11; 13-25: Mark 15, 1-15: Matthew 27, 11-26.//
//Matthew 27, 27-38: Mark 15, 16-27: Luke 23, 26-34: John 19, 17-20.//
//Matthew 27, 39-56: Mark 15, 29-41: Luke 23, 35-49: John 19, 23-30.//
//Mark 15, 42-47: Luke 23, 50-56: John 19, 38-42: Matthew 27, 57-66.//
//Matthew 28, 1, and 8-10: Mark 16, 1-11: Luke 24, 1-9: John 20, 11-18.
//Mark 16, 12-13: Luke 24, 13-31; 33-43: John 20, 19-29.//
//John 21, 1-25.//
//Matthew 28, 16-20: Mark 16, 12-18: Luke 24, 44-53; and Luke's Acts of The Apostles 1, 12.//
//Luke: Acts 1, 2-9.
//Luke: Acts 8, 3; 9, 1-20. Damascus. A.D. 34-35.
//Luke: Acts 10, 44-45; and 11, 16.
//Luke: Acts 18, 7-11.
//Luke: Acts 20, 17-19, 22, 25, 32-38.
//Luke: Acts (parts of) Chapters 21, 22, 23, 24, 25, 26, 27.
//Luke: Acts 26, 1-32.
//Paul: II. Corinthians 12, 7-9.
//Revelation 1, 1-3; 9-20.
//Revelation 2, 1-7.
//Revelation 2, 8-11.
//Revelation 2, 12-17.//
//Revelation 2, 18-29.//
//Revelation 3, 1-6.//
//Revelation 3, 7-13.
//Revelation 3, 14-22.
//Revelation 4, 1-2; 14, 13; 16, 15; 19, 9-10; 21, 5-8; 22, 6-21.
