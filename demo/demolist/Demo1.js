/**
*
* @title 基本示例1
* @description 
*
*/
import React, { Component } from 'react';
import NcUpload from '../../src'
import Button from 'bee-button'

class Demo1 extends Component {
    constructor(props){
        super(props)
        this.state={
            files:[
                {
                    fileName:'合同.docx',
                    fileSize:'100kb'
                },
                {
                    fileName:'程序猿的自我修养.avi',
                    fileSize:'100GB'
                },
                {
                    fileName:'javaScript红皮书.pdf',
                    fileSize:'100GB'
                },
                {
                    fileName:'用友大前端技术部通讯录.xls',
                    fileSize:'8MB'
                },
            ]
        }
    }
    click=()=>{
        this.setState({
            files:[
                {
                    fileName:'合同.docx',
                    fileSize:'100kb'
                },
                {
                    fileName:'程序猿的自我修养.avi',
                    fileSize:'100GB'
                },
                {
                    fileName:'用友大前端技术部通讯录.xls',
                    fileSize:'8MB'
                },
                {
                    fileName:'合同.docx',
                    fileSize:'100kb'
                },
                {
                    fileName:'程序猿的自我修养.avi',
                    fileSize:'100GB'
                },
                {
                    fileName:'用友大前端技术部通讯录.xls',
                    fileSize:'8MB'
                },
                {
                    fileName:'合同.docx',
                    fileSize:'100kb'
                },
                {
                    fileName:'程序猿的自我修养.avi',
                    fileSize:'100GB'
                },
                {
                    fileName:'用友大前端技术部通讯录.xls',
                    fileSize:'8MB'
                },
                {
                    fileName:'合同.docx',
                    fileSize:'100kb'
                },
                {
                    fileName:'程序猿的自我修养.avi',
                    fileSize:'100GB'
                },
                {
                    fileName:'用友大前端技术部通讯录.xls',
                    fileSize:'8MB'
                },
            ]
        })
    }
    render () {
        return (
            <div>
                <Button onClick={this.click} colors='primary' style={{'marginBottom':'20px'}}>点击切换文件列表</Button>
                <NcUpload files={this.state.files} onRemove={(item)=>{console.log('删除',item)}}/>
            </div>
        )
    }
}
export default Demo1