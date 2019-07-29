import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Upload from 'bee-upload';
import Button from 'bee-button';
import Icon from 'bee-icon';


const noop = ()=>{}
const propTypes = {
    clsfix:PropTypes.string,
    placeholder:PropTypes.string,
    files:PropTypes.array,
    onChange:PropTypes.func,
    onRemove:PropTypes.func
};
const defaultProps = {
    clsfix:'nc-upload',
    placeholder:'上传附件',
    files:[],
    onChange:noop,
    onRemove:noop
};

class NcUpload extends Component {


    del=(item)=>{
        this.props.onRemove(item)
    }

    render(){
        let { clsfix, className, placeholder,files,onRemove, ...other } = this.props;
        let clsses = clsfix;
        if(className)clsses+=' '+className;
        return(
            <div className={clsses}>
                <Upload {...other} showUploadList={false}>
                    <Button bordered className={`${clsfix}-button`}>
                        {placeholder}
                        <Icon type='uf-cloud-o-up'/>
                    </Button>
                </Upload>
                <div className={`${clsfix}-files`}>
                    {
                        files.map((item,index)=>{
                            let fileType = '';
                            if((item.fileName.indexOf('docx')!=-1)||(item.fileName.indexOf('doc')!=-1))fileType='word';
                            if((item.fileName.indexOf('xlsx')!=-1)||(item.fileName.indexOf('xls')!=-1))fileType='excel';
                            if(item.fileName.indexOf('pdf')!=-1)fileType='pdf';
                            return (
                                <div className={`${clsfix}-file`} key={index}>
                                    <div className={`${clsfix}-file-flex`}>
                                        <div className={`${clsfix}-file-img ${fileType}`}>
                                        </div>
                                        <div className={`${clsfix}-file-ctn`}>
                                            <span className={`${clsfix}-file-name`} title={item.fileName}>{item.fileName}</span>
                                            <span className={`${clsfix}-file-size`}>{item.fileSize}</span>
                                        </div>
                                        <div className={`${clsfix}-file-del`} onClick={()=>{this.del(item)}}>
                                            删除
                                        </div>
                                    </div>
                                </div>
                            )
                            
                        })
                    }
                </div>
            </div>
            
        )
    }
};

NcUpload.propTypes = propTypes;
NcUpload.defaultProps = defaultProps;
export default NcUpload;