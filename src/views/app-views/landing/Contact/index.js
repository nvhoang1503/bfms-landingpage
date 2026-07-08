import React, { useState, useCallback, useEffect, useRef, memo } from 'react'
import { Form, Input } from 'antd'
import ReactFlagsSelect from "react-flags-select"
import CountriesPhoneCode from './countriesPhoneCodeData'
import CountriesCode from './countriesCodeData'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import { connect } from "react-redux";

const { Item, useForm } = Form
const { TextArea } = Input

const SelectCountry = React.memo(({ callbackGetCode }) => {
    const [select, setSelect] = useState('VN');

    useEffect(() => {
        callbackGetCode(select)
    })

    const onSelect = (code) => {
        callbackGetCode(code)
        setSelect(code)
    };

    return (
        <ReactFlagsSelect
            selected={select}
            onSelect={onSelect}
            countries={CountriesCode}
            showSelectedLabel={false}
            showOptionLabel={true}
            fullWidth={true}
            customLabels={CountriesPhoneCode}
            placeholder='(+84)'
            selectedSize={14}
            optionsSize={14}
        />
    )
})

// eslint-disable-next-line
const validateMessages = {
    required: '${label} là bắt buộc!',
    types: {
        email: '${label} có định dạng không hợp lệ!'
    },
    email: {
        range: '${label} phải ít hơn ${max} kí tự!'
    },
    string: {
        range: '${label} phải ít hơn ${max} kí tự!'
    }
}

const labelColForm = {
    xl: { span: 5 },
    lg: { span: 24 },
    md: { span: 6 },
}

const wrapperColForm = {
    xl: { span: 19 },
    lg: { span: 24 },
    md: { span: 18 },
}

const wrapperColButton = {
    xl: { offset: 5, span: 19 },
    lg: { offset: 0, span: 24 },
    md: { offset: 6, span: 18 },
}

const Contact = props => {

    const { screens } = props

    const [contactForm] = useForm()
    const phoneCodeRef = useRef()

    const getCountryCode = useCallback((countriesCode) => {
        const phoneCode = CountriesPhoneCode[countriesCode].secondary
        phoneCodeRef.current = phoneCode
    }, [])

    const onSubmit = useCallback(async () => {
        try {
            const validFieldsValue = await contactForm.validateFields();

            const data = {
                ...validFieldsValue,
                phoneNumber: `${phoneCodeRef.current} ${validFieldsValue.phone}`
            }

            emailjs.send('service_hc9dfe2', 'template_l3uqfrt', data, 'YxQ7cd2iS3_ZJyHMa')
                .then(_ => {
                    contactForm.resetFields();
                    toast.success('Đã gửi yêu cầu của bạn!');
                }, (error) => {
                    toast.error(error.text);
                });
        } catch (errors) {
            console.log(errors)
        }
    }, [contactForm])

    return (
        <>
            <div className='bg-[#F2F9E8] rounded-[30px] p-4 md:py-10 md:px-20 lg:px-60 xl:px-[375px] 2xl:px-[465px]'>
                <div className='flex flex-col items-stretch justify-between'>
                    <div>
                        <div className='text-center text-[#81B82F] font-extrabold text-[18px] md:text-[24px] lg:text-[32px]'>Liên hệ với chúng tôi</div>
                        <div className='text-center text-[#808089] mt-3 text-[14px] md:text-[18px]'>Liên hệ với chúng tôi để nhận được tư vấn về những vấn đề bạn thắc mắc</div>
                    </div>
                    <Form form={contactForm} name='contactForm' labelCol={labelColForm} wrapperCol={wrapperColForm} requiredMark={true} autoComplete="off" validateMessages={validateMessages} className='mt-[30px] xl:mt-[50px]'>
                        <Item label='Họ và Tên' name='name' rules={[{ type: 'string', max: 200 }, { required: true }]}>
                            <Input className='antd-input' />
                        </Item>
                        <Item label='Email' name='email' rules={[{ type: 'email', max: 200 }, { required: true }]}>
                            <Input className='antd-input' />
                        </Item>
                        <Item label='Số điện thoại' name='phone' rules={[{ type: 'string', max: 50 }, { required: true }]}>
                            <Input className='antd-input' addonBefore={<SelectCountry callbackGetCode={getCountryCode} />} />
                        </Item>
                        <Item label='Lời nhắn' name='message' rules={[{ type: 'string', max: 200 }, { required: true }]}>
                            <TextArea rows={5} placeholder='Nội dung yêu cầu, thắc mắc, hỗ trợ sản phẩm...' />
                        </Item>
                        <Item wrapperCol={wrapperColButton} className='group text-center'>
                            <button type="submit" className="rounded-xl bg-white border-[#81B82F] border-[1.5px] mt-2 md:mt-4 cursor-pointer group-hover:bg-[#81B82F] w-full md:w-fit lg:w-full xl:w-fit" onClick={onSubmit}>
                                <div className="text-[14px] xl:text-[16px] px-[23px] py-[10px] lg:px-[30px] lg:py-[13px] font-[600] text-[#81B82F] group-hover:text-white leading-none tracking-wide">
                                    Nhận tư vấn ngay!
                                </div>
                            </button>
                        </Item>
                    </Form>
                </div>
            </div>
            <ToastContainer
                position={!screens.includes('md') ? "top-center" : "top-left"}
                autoClose={8000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>
    )
}

const mapStateToProps = state => {
    return {
      screens: state.screens.screens
    }
  }

export default connect(mapStateToProps, null)(memo(Contact))