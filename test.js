import BpmnModdle from 'bpmn-moddle';
import fs from 'fs';

async function test() {

    const moddle = new BpmnModdle();

    const xmlStr =
        '<?xml version="1.0" encoding="UTF-8"?>' +
        '<bpmn2:definitions xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" ' +
        'id="empty-definitions" ' +
        'targetNamespace="http://bpmn.io/schema/bpmn">' +
        '</bpmn2:definitions>';

    const xmlTest = "<?xml version='1.0' encoding='UTF-8'?>\n" +
        "<bpmn:definitions xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:bpmn='http://www.omg.org/spec/BPMN/20100524/MODEL' xmlns:bpmndi='http://www.omg.org/spec/BPMN/20100524/DI' xmlns:dc='http://www.omg.org/spec/DD/20100524/DC' xmlns:di='http://www.omg.org/spec/DD/20100524/DI' id='Definitions_0fxsonn' targetNamespace='http://bpmn.io/schema/bpmn' exporter='bpmn-js (https://demo.bpmn.io)' exporterVersion='8.3.1'><bpmn:process id='Process_1b19pz8' isExecutable='false'><bpmn:startEvent id='StartEvent_1ttduzd'><bpmn:outgoing>Flow_135s0mc</bpmn:outgoing></bpmn:startEvent><bpmn:exclusiveGateway id='Gateway_1mcxgrg'><bpmn:incoming>Flow_135s0mc</bpmn:incoming><bpmn:incoming>Flow_0uk99zf</bpmn:incoming><bpmn:outgoing>Flow_17egcl2</bpmn:outgoing></bpmn:exclusiveGateway><bpmn:exclusiveGateway id='Gateway_0e7lgaw'><bpmn:incoming>Flow_17egcl2</bpmn:incoming><bpmn:outgoing>Flow_15u1ya0</bpmn:outgoing><bpmn:outgoing>Flow_14ejkqe</bpmn:outgoing><bpmn:outgoing>Flow_0lxsvvb</bpmn:outgoing><bpmn:outgoing>Flow_1tp7fvm</bpmn:outgoing></bpmn:exclusiveGateway><bpmn:sequenceFlow id='Flow_15u1ya0' sourceRef='Gateway_0e7lgaw' targetRef='Activity_1op1hp8'/><bpmn:sequenceFlow id='Flow_14ejkqe' sourceRef='Gateway_0e7lgaw' targetRef='Activity_0w1fiub'/><bpmn:sequenceFlow id='Flow_0lxsvvb' sourceRef='Gateway_0e7lgaw' targetRef='Activity_10m2osh'/><bpmn:sequenceFlow id='Flow_1tp7fvm' sourceRef='Gateway_0e7lgaw' targetRef='Activity_0wshe3g'/><bpmn:sequenceFlow id='Flow_135s0mc' sourceRef='StartEvent_1ttduzd' targetRef='Gateway_1mcxgrg'/><bpmn:sequenceFlow id='Flow_17egcl2' sourceRef='Gateway_1mcxgrg' targetRef='Gateway_0e7lgaw'/><bpmn:callActivity id='Activity_1op1hp8' name='process 1'><bpmn:incoming>Flow_15u1ya0</bpmn:incoming><bpmn:outgoing>Flow_10u7c3j</bpmn:outgoing></bpmn:callActivity><bpmn:callActivity id='Activity_0w1fiub' name='process 2'><bpmn:incoming>Flow_14ejkqe</bpmn:incoming><bpmn:outgoing>Flow_0xn5gss</bpmn:outgoing></bpmn:callActivity><bpmn:callActivity id='Activity_10m2osh' name='process 3'><bpmn:incoming>Flow_0lxsvvb</bpmn:incoming><bpmn:outgoing>Flow_0yrqqvd</bpmn:outgoing></bpmn:callActivity><bpmn:callActivity id='Activity_0wshe3g' name='process 4'><bpmn:incoming>Flow_1tp7fvm</bpmn:incoming><bpmn:outgoing>Flow_0qzh693</bpmn:outgoing></bpmn:callActivity><bpmn:exclusiveGateway id='Gateway_0ufcw30'><bpmn:incoming>Flow_0xn5gss</bpmn:incoming><bpmn:incoming>Flow_10u7c3j</bpmn:incoming><bpmn:incoming>Flow_0yrqqvd</bpmn:incoming><bpmn:incoming>Flow_0qzh693</bpmn:incoming><bpmn:outgoing>Flow_1v9bquo</bpmn:outgoing></bpmn:exclusiveGateway><bpmn:sequenceFlow id='Flow_0xn5gss' sourceRef='Activity_0w1fiub' targetRef='Gateway_0ufcw30'/><bpmn:sequenceFlow id='Flow_10u7c3j' sourceRef='Activity_1op1hp8' targetRef='Gateway_0ufcw30'/><bpmn:sequenceFlow id='Flow_0yrqqvd' sourceRef='Activity_10m2osh' targetRef='Gateway_0ufcw30'/><bpmn:sequenceFlow id='Flow_0qzh693' sourceRef='Activity_0wshe3g' targetRef='Gateway_0ufcw30'/><bpmn:serviceTask id='Activity_18ebmhs' name='Decide what to do next'><bpmn:incoming>Flow_1v9bquo</bpmn:incoming><bpmn:outgoing>Flow_18ogura</bpmn:outgoing></bpmn:serviceTask><bpmn:sequenceFlow id='Flow_1v9bquo' sourceRef='Gateway_0ufcw30' targetRef='Activity_18ebmhs'/><bpmn:exclusiveGateway id='Gateway_0bldg20' name='End process?'><bpmn:incoming>Flow_18ogura</bpmn:incoming><bpmn:outgoing>Flow_0uk99zf</bpmn:outgoing><bpmn:outgoing>Flow_0zrx8hm</bpmn:outgoing></bpmn:exclusiveGateway><bpmn:sequenceFlow id='Flow_18ogura' sourceRef='Activity_18ebmhs' targetRef='Gateway_0bldg20'/><bpmn:sequenceFlow id='Flow_0uk99zf' name='No' sourceRef='Gateway_0bldg20' targetRef='Gateway_1mcxgrg'/><bpmn:endEvent id='Event_0uinnuq'><bpmn:incoming>Flow_0zrx8hm</bpmn:incoming></bpmn:endEvent><bpmn:sequenceFlow id='Flow_0zrx8hm' name='Yes' sourceRef='Gateway_0bldg20' targetRef='Event_0uinnuq'/></bpmn:process><bpmndi:BPMNDiagram id='BPMNDiagram_1'><bpmndi:BPMNPlane id='BPMNPlane_1' bpmnElement='Process_1b19pz8'><bpmndi:BPMNEdge id='Flow_15u1ya0_di' bpmnElement='Flow_15u1ya0'><di:waypoint x='490' y='305'/><di:waypoint x='490' y='220'/><di:waypoint x='640' y='220'/></bpmndi:BPMNEdge><bpmndi:BPMNEdge id='Flow_14ejkqe_di' bpmnElement='Flow_14ejkqe'><di:waypoint x='515' y='330'/><di:waypoint x='640' y='330'/></bpmndi:BPMNEdge><bpmndi:BPMNEdge id='Flow_0lxsvvb_di' bpmnElement='Flow_0lxsvvb'><di:waypoint x='490' y='355'/><di:waypoint x='490' y='440'/><di:waypoint x='640' y='440'/></bpmndi:BPMNEdge><bpmndi:BPMNEdge id='Flow_1tp7fvm_di' bpmnElement='Flow_1tp7fvm'><di:waypoint x='490' y='355'/><di:waypoint x='490' y='550'/><di:waypoint x='640' y='550'/></bpmndi:BPMNEdge><bpmndi:BPMNEdge id='Flow_135s0mc_di' bpmnElement='Flow_135s0mc'><di:waypoint x='228' y='330'/><di:waypoint x='325' y='330'/></bpmndi:BPMNEdge><bpmndi:BPMNEdge id='Flow_17egcl2_di' bpmnElement='Flow_17egcl2'><di:waypoint x='375' y='330'/><di:waypoint x='465' y='330'/></bpmndi:BPMNEdge><bpmndi:BPMNEdge id='Flow_0xn5gss_di' bpmnElement='Flow_0xn5gss'><di:waypoint x='740' y='330'/><di:waypoint x='815' y='330'/></bpmndi:BPMNEdge><bpmndi:BPMNEdge id='Flow_10u7c3j_di' bpmnElement='Flow_10u7c3j'><di:waypoint x='740' y='220'/><di:waypoint x='840' y='220'/><di:waypoint x='840' y='305'/></bpmndi:BPMNEdge><bpmndi:BPMNEdge id='Flow_0yrqqvd_di' bpmnElement='Flow_0yrqqvd'><di:waypoint x='740' y='440'/><di:waypoint x='840' y='440'/><di:waypoint x='840' y='355'/></bpmndi:BPMNEdge><bpmndi:BPMNEdge id='Flow_0qzh693_di' bpmnElement='Flow_0qzh693'><di:waypoint x='740' y='550'/><di:waypoint x='840' y='550'/><di:waypoint x='840' y='355'/></bpmndi:BPMNEdge><bpmndi:BPMNEdge id='Flow_1v9bquo_di' bpmnElement='Flow_1v9bquo'><di:waypoint x='865' y='330'/><di:waypoint x='920' y='330'/></bpmndi:BPMNEdge><bpmndi:BPMNEdge id='Flow_18ogura_di' bpmnElement='Flow_18ogura'><di:waypoint x='1020' y='330'/><di:waypoint x='1085' y='330'/></bpmndi:BPMNEdge><bpmndi:BPMNEdge id='Flow_0uk99zf_di' bpmnElement='Flow_0uk99zf'><di:waypoint x='1110' y='305'/><di:waypoint x='1110' y='120'/><di:waypoint x='350' y='120'/><di:waypoint x='350' y='305'/><bpmndi:BPMNLabel><dc:Bounds x='1122' y='263' width='15' height='14'/></bpmndi:BPMNLabel></bpmndi:BPMNEdge><bpmndi:BPMNEdge id='Flow_0zrx8hm_di' bpmnElement='Flow_0zrx8hm'><di:waypoint x='1135' y='330'/><di:waypoint x='1212' y='330'/><bpmndi:BPMNLabel><dc:Bounds x='1165' y='312' width='18' height='14'/></bpmndi:BPMNLabel></bpmndi:BPMNEdge><bpmndi:BPMNShape id='_BPMNShape_StartEvent_2' bpmnElement='StartEvent_1ttduzd'><dc:Bounds x='192' y='312' width='36' height='36'/></bpmndi:BPMNShape><bpmndi:BPMNShape id='Gateway_1mcxgrg_di' bpmnElement='Gateway_1mcxgrg' isMarkerVisible='true'><dc:Bounds x='325' y='305' width='50' height='50'/></bpmndi:BPMNShape><bpmndi:BPMNShape id='Gateway_0e7lgaw_di' bpmnElement='Gateway_0e7lgaw' isMarkerVisible='true'><dc:Bounds x='465' y='305' width='50' height='50'/></bpmndi:BPMNShape><bpmndi:BPMNShape id='Activity_0mhe5qt_di' bpmnElement='Activity_0w1fiub'><dc:Bounds x='640' y='290' width='100' height='80'/></bpmndi:BPMNShape><bpmndi:BPMNShape id='Activity_1pyhmhv_di' bpmnElement='Activity_1op1hp8'><dc:Bounds x='640' y='180' width='100' height='80'/></bpmndi:BPMNShape><bpmndi:BPMNShape id='Activity_1kok962_di' bpmnElement='Activity_10m2osh'><dc:Bounds x='640' y='400' width='100' height='80'/></bpmndi:BPMNShape><bpmndi:BPMNShape id='Activity_0mtjms7_di' bpmnElement='Activity_0wshe3g'><dc:Bounds x='640' y='510' width='100' height='80'/></bpmndi:BPMNShape><bpmndi:BPMNShape id='Gateway_0ufcw30_di' bpmnElement='Gateway_0ufcw30' isMarkerVisible='true'><dc:Bounds x='815' y='305' width='50' height='50'/></bpmndi:BPMNShape><bpmndi:BPMNShape id='Activity_0n315wz_di' bpmnElement='Activity_18ebmhs'><dc:Bounds x='920' y='290' width='100' height='80'/></bpmndi:BPMNShape><bpmndi:BPMNShape id='Gateway_0bldg20_di' bpmnElement='Gateway_0bldg20' isMarkerVisible='true'><dc:Bounds x='1085' y='305' width='50' height='50'/><bpmndi:BPMNLabel><dc:Bounds x='1076' y='362' width='68' height='14'/></bpmndi:BPMNLabel></bpmndi:BPMNShape><bpmndi:BPMNShape id='Event_0uinnuq_di' bpmnElement='Event_0uinnuq'><dc:Bounds x='1212' y='312' width='36' height='36'/></bpmndi:BPMNShape></bpmndi:BPMNPlane></bpmndi:BPMNDiagram></bpmn:definitions>";

    let xmlTest2 = fs.readFileSync("bpmn.iflw", "utf-8");

    let end = fs.readFileSync("End.bpmn", "utf-8");

    const {
        rootElement: definitions
    } = await moddle.fromXML(end);

    console.log(definitions);

// update id attribute
    definitions.set('id', 'NEW ID');

// add a root element
    const bpmnProcess = moddle.create('bpmn:Process', {id: 'MyProcess_1'});
    definitions.get('rootElements').push(bpmnProcess);

// xmlStrUpdated contains new id and the added process
    const {
        xml: xmlStrUpdated
    } = await moddle.toXML(definitions);

    //console.log(xmlStrUpdated);

}

test();
