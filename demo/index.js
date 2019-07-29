import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var DemoArray = [{"example":<Demo1 />,"title":" 基本示例1","code":"/**\n*\n* @title 基本示例1\n* @description \n*\n*/\nimport React, { Component } from 'react';\nimport { Button } from 'tinper-bee';\nimport NcUpload from \"tinper-bee/lib/src\";\n\nclass Demo1 extends Component {\n    constructor(props){\n        super(props)\n        this.state={\n            files:[\n                {\n                    fileName:'合同.docx',\n                    fileSize:'100kb'\n                },\n                {\n                    fileName:'程序猿的自我修养.avi',\n                    fileSize:'100GB'\n                },\n                {\n                    fileName:'javaScript红皮书.pdf',\n                    fileSize:'100GB'\n                },\n                {\n                    fileName:'用友大前端技术部通讯录.xls',\n                    fileSize:'8MB'\n                },\n            ]\n        }\n    }\n    click=()=>{\n        this.setState({\n            files:[\n                {\n                    fileName:'合同.docx',\n                    fileSize:'100kb'\n                },\n                {\n                    fileName:'程序猿的自我修养.avi',\n                    fileSize:'100GB'\n                },\n                {\n                    fileName:'用友大前端技术部通讯录.xls',\n                    fileSize:'8MB'\n                },\n                {\n                    fileName:'合同.docx',\n                    fileSize:'100kb'\n                },\n                {\n                    fileName:'程序猿的自我修养.avi',\n                    fileSize:'100GB'\n                },\n                {\n                    fileName:'用友大前端技术部通讯录.xls',\n                    fileSize:'8MB'\n                },\n                {\n                    fileName:'合同.docx',\n                    fileSize:'100kb'\n                },\n                {\n                    fileName:'程序猿的自我修养.avi',\n                    fileSize:'100GB'\n                },\n                {\n                    fileName:'用友大前端技术部通讯录.xls',\n                    fileSize:'8MB'\n                },\n                {\n                    fileName:'合同.docx',\n                    fileSize:'100kb'\n                },\n                {\n                    fileName:'程序猿的自我修养.avi',\n                    fileSize:'100GB'\n                },\n                {\n                    fileName:'用友大前端技术部通讯录.xls',\n                    fileSize:'8MB'\n                },\n            ]\n        })\n    }\n    render () {\n        return (\n            <div>\n                <Button onClick={this.click} colors='primary' style={{'marginBottom':'20px'}}>点击切换文件列表</Button>\n                <NcUpload files={this.state.files} onRemove={(item)=>{console.log('删除',item)}}/>\n            </div>\n        )\n    }\n}\n","desc":" "},{"example":<Demo2 />,"title":" 基本示例2","code":"/**\n*\n* @title 基本示例2\n* @description \n*\n*/\nimport React, { Component } from 'react';\nimport {  } from 'tinper-bee';\nimport NcUpload from \"tinper-bee/lib/src\";\n\nclass Demo1 extends Component {\n    constructor(props){\n        super(props)\n        this.state={\n            files:[\n                {\n                    fileName:'合同.docx',\n                    fileSize:'100kb'\n                },\n                {\n                    fileName:'程序猿的自我修养.avi',\n                    fileSize:'100GB'\n                },\n                {\n                    fileName:'用友大前端技术部通讯录.xls',\n                    fileSize:'8MB'\n                },\n                {\n                    fileName:'合同.docx',\n                    fileSize:'100kb'\n                },\n                {\n                    fileName:'程序猿的自我修养.avi',\n                    fileSize:'100GB'\n                },\n                {\n                    fileName:'用友大前端技术部通讯录.xls',\n                    fileSize:'8MB'\n                },\n            ]\n        }\n    }\n    render () {\n        return (\n            <div >\n                <NcUpload files={this.state.files}/>\n            </div>\n        )\n    }\n}\n","desc":" "}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }
    handleClick=()=> {
        this.setState({ open: !this.state.open })
    }
    fCloseDrawer=()=>{
        this.setState({
            open: false
        })
    }

    render () {
        const { title, example, code, desc, scss_code  } = this.props;

        const header = (
            <div>
                <p className='component-title'>{ title }</p>
                <p>{ desc }</p>
                <span className='component-code' onClick={this.handleClick}> 查看源码 <i className='uf uf-arrow-right'/> </span>
            </div>
        );
        return (
            <Col md={12} id={title.trim()} className='component-demo'>
            <Panel header={header}>
                {example}
            </Panel>
           
            <Drawer className='component-drawerc' title={title} show={this.state.open} placement='right' onClose={this.fCloseDrawer}>
            <div className='component-code-copy'> JS代码 
                <Clipboard action="copy" text={code}/>
            </div>
            <pre className="pre-js">
                <code className="hljs javascript">{ code }</code>
            </pre >
            {!!scss_code ?<div className='component-code-copy copy-css'> SCSS代码 
                <Clipboard action="copy" text={scss_code}/>
            </div>:null }
                { !!scss_code ? <pre className="pre-css">
                 <code className="hljs css">{ scss_code }</code>
                 </pre> : null }
            </Drawer>
        </Col>
    )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
            <Row>
            {DemoArray.map((child,index) => {

                return (
            <Demo example= {child.example} title= {child.title} code= {child.code} scss_code= {child.scss_code} desc= {child.desc} key= {index}/>
    )

    })}
    </Row>
    )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
