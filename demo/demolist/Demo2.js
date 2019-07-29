/**
*
* @title 基本示例2
* @description 
*
*/
import React, { Component } from 'react';
import NcUpload from '../../src'

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
        }
    }
    render () {
        return (
            <div >
                <NcUpload files={this.state.files}/>
            </div>
        )
    }
}
export default Demo1