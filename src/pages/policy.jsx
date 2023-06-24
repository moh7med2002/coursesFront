import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import { Box, Container , Typography, styled} from '@mui/material'

const Wrapper = styled(Box)({
    backgroundColor: '#fff',
    border:"1px solid #ddd",
    boxShadow:"0 6px 10px 0 rgba(0,0,0,.1)",
    padding:"20px 0"
}) 

function Policy() {
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
                    sx={{fontSize:{xs:"18px",md:"24px",borderBottom:"1px solid #ddd" , padding:"0 20px 20px"}}}>
                        سياسة الخصوصية
                    </Typography>
                    <Box sx={{padding:"30px 20px 20px"}}>
                        <Typography sx={{fontSize:"17px" , color:"#222", lineHeight:"1.6"}}>
                        نقدر مخاوفكم واهتمامكم بشأن خصوصية بياناتكم على شبكة الإنترنت لذلك لقد تم إعداد هذه السياسة لمساعدتكم في تفهم طبيعة
                        البيانات التي نقوم بتجميعها منكم عند زيارتكم لموقعنا على شبكة الانترنت وكيفية تعاملنا مع هذه البيانات.
                        </Typography>
                        <Box sx={{marginTop:"40px"}}>
                            <Typography sx={{fontSize:{xs:"18px",md:"24px"}}}>
                            التصفح
                            </Typography>
                            <Typography sx={{fontSize:"16px" , color:"#222", lineHeight:"1.6",marginTop:"10px"}}>
                            لم نقم بتصميم هذه المواقع من أجل تجميع بياناتك الشخصية من جهاز الكمبيوتر الخاص بك
                            أثناء تصفحك لهذا المواقع، وإنما سيتم فقط استخدام البيانات المقدمة من قبلك بمعرفتك ومحض إرادتك.
                            </Typography>
                        </Box>
                        <Box sx={{marginTop:"40px"}}>
                            <Typography sx={{fontSize:{xs:"18px",md:"24px"}}}>
                            عنوان بروتوكول شبكة الإنترنت (IP)
                            </Typography>
                            <Typography sx={{fontSize:"16px" , color:"#222", lineHeight:"1.6",marginTop:"10px"}}>
                            في أي وقت تزور فيه اي موقع على الانترنت بما فيها موقعنا هذا ، سيقوم السيرفر المضيف بتسجيل عنوان بروتوكول شبكة الإنترنت (IP) الخاص بك ، تاريخ ووقت الزيارة ونوع متصفح الإنترنت الذي تستخدمه والعنوان URL الخاص بأي موقع من مواقع الإنترنت التي تقوم بإحالتك إلى مواقعنا على الشبكة.
                            </Typography>
                        </Box>
                        <Box sx={{marginTop:"40px"}}>
                            <Typography sx={{fontSize:{xs:"18px",md:"24px"}}}>
                            عمليات المسح على الشبكة
                            </Typography>
                            <Typography sx={{fontSize:"16px" , color:"#222", lineHeight:"1.6",marginTop:"10px"}}>
                            إن عمليات المسح التي نقوم بها مباشرة على الشبكة تمكننا من تجميع بيانات محددة مثل البيانات المطلوبة منك بخصوص نظرتك وشعورك تجاه موقعنا.تعتبر ردودك ذات أهمية قصوى ، ومحل تقديرنا حيث أنها تمكننا
                            من تحسين مستوى موقعنا، ولك كامل الحرية والإختيار في تقديم البيانات المتعلقة بإسمك والبيانات الأخرى.
                            </Typography>
                        </Box>
                        <Box sx={{marginTop:"40px"}}>
                            <Typography sx={{fontSize:{xs:"18px",md:"24px"}}}>
                            عند الاتصال بنا
                            </Typography>
                            <Typography sx={{fontSize:"16px" , color:"#222", lineHeight:"1.6",marginTop:"10px"}}>
                            سيتم التعامل مع كافة البيانات المقدمة من قبلك على أساس أنها سرية . تتطلب النماذج التي يتم تقديمها مباشرة على الشبكة تقديم البيانات التي ستساعدنا في تحسين موقعنا.سيتم
                            استخدام البيانات التي يتم تقديمها من قبلك في الرد على كافة استفساراتك ، ملاحظاتك ، أو طلباتك .
                            </Typography>
                        </Box>
                        <Box sx={{marginTop:"40px"}}>
                            <Typography sx={{fontSize:{xs:"18px",md:"24px"}}}>
                            اخيراً
                            </Typography>
                            <Typography sx={{fontSize:"16px" , color:"#222", lineHeight:"1.6",marginTop:"10px"}}>
                            إن مخاوفك واهتمامك بشأن سرية وخصوصية البيانات تعتبر مسألة في غاية الأهمية بالنسبة لنا، نحن نأمل أن يتم تحقيق ذلك من خلال هذه السياسة.
                            </Typography>
                        </Box>
                    </Box>
                </Wrapper>
            </Container>
        </Box>
    </Layout>
  )
}

export default Policy