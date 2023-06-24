import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import { Box, Container , Typography, styled} from '@mui/material'

const Wrapper = styled(Box)({
    backgroundColor: '#fff',
    border:"1px solid #ddd",
    boxShadow:"0 6px 10px 0 rgba(0,0,0,.1)",
    padding:"20px 0"
}) 

function Terms() {
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    },[]);
    
  return (
    <Layout>
        <Box sx={{minHeight:"78vh" , backgroundColor:"#f1f1f1", paddingY:"50px"}}>
            <Container>
                <Wrapper >
                    <Typography variant='h3' fontWeight={"bold"} 
                    sx={{fontSize:{xs:"18px",md:"24px",borderBottom:"1px solid #ddd" , padding:"0 20px 20px"}}}>شروط الاستخدام
                    </Typography>
                    <Box sx={{padding:"30px 20px 20px"}}>
                        <Typography sx={{fontSize:"17px" , color:"#222", lineHeight:"1.6"}}>
                        نرجو من المستخدمين الكرام الالتزام بالشروط التالية وفهمها جيداً ذلك لأنه باستخدامك لموقع كورسات أنت تقر على موافقتك الكاملة على هذه الشروط. وفي حال عدم الموافقة على شروط الاستخدام
                        ، يرجى ألا تستخدم موقع كورسات وألا تنشئ حساباً به. كما أن الموقع يحتفظ بحق تعديل الاتفاقية في أيّ وقت دون سابق إنذار ولأي سبب .
                        </Typography>
                        <Box sx={{marginTop:"40px"}}>
                            <Typography sx={{fontSize:{xs:"18px",md:"24px"}}}>
                            الحسابات :
                            </Typography>
                            <Box component={"ul"} sx={{paddingX:"30px", marginTop:"10px"}}>
                                <Box component={"li"} sx={{fontSize:"14px", fontWeight:"600",lineHeight:"1.6" , marginBottom:"10px"}}>
                                    يجب أن يكون اسم المستخدم اسم له معنى وليس مجرد رموز أو أرقام وممنوع استخدام
                                    أي أسماء تحرض على الكراهية، العنف أو استخدام أي من العلامات التجارية كاسم للمستخدم
                                    ، ويلتزم المستخدم بكتابة اسمه الحقيقي في ملفه الشخصي.
                                </Box>
                                <Box component={"li"} sx={{fontSize:"14px", fontWeight:"600",lineHeight:"1.6" , marginBottom:"10px"}}>
                                يضمن المستخدم أن جميع المعلومات التي يقوم بإضافتها في حسابه في كورسات صحيحة تماماً 
                                ، ويتحمل كامل المسؤولية عن أي معلومات خاطئة يقوم بإضافتها .
                                </Box>
                                <Box component={"li"} sx={{fontSize:"14px", fontWeight:"600",lineHeight:"1.6" , marginBottom:"10px"}}>
                                يلتزم المستخدم بعدم إنشاء أكثر من حساب واحد في كورسات وفي حال واجه
                                مشكلة في حسابه الأول فعليه مراسلتنا عبر رابط صفحة الاتصال في اسفل الموقع لحل المشكلة.
                                </Box>
                                <Box component={"li"} sx={{fontSize:"14px", fontWeight:"600",lineHeight:"1.6" , marginBottom:"10px"}}>
                                يلتزم المستخدم بوضع صورته الشخصية الحقيقية وعدم وضع صورة لشخص آخر ضمن حسابه، أو صور ترويجية.
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{marginTop:"40px"}}>
                            <Typography sx={{fontSize:{xs:"18px",md:"24px"}}}>
                            تعديل شروط الاستخدام :
                            </Typography>
                            <Typography sx={{fontSize:"16px" , color:"#222", lineHeight:"1.6",marginTop:"10px"}}>
                            يحتفظ موقع كورسات في حقه بتغيير أو تعديل أي من هذه الشروط في أي وقت، إذا لاحظت أي جزئية مبهمة أو خطأ في تفاصيل هذه الشروط نرجو تنبيهنا لذلك.
                            </Typography>
                            </Box>
                    </Box>
                </Wrapper>
            </Container>
        </Box>
    </Layout>
  )
}

export default Terms