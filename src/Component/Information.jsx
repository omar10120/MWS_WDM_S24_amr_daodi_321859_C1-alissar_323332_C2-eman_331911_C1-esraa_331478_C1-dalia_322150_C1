import React from 'react'

function Information() {
  return (
    <div className="container mx-auto  py-10" id='compare' >
            <div className='w-full flex flex-col justify-end items-end 	 space-y-5 max-sm:p-5 '>
                <h1 className='font-bold text-2xl'>المقارنات </h1>
                <span className='font-bold'>:Logistic Regression</span>
                <p className='leading-10 ' dir="rtl">يتمتع النموذج بدقة accuracy منخفضة (33%) ولكن لديه precision وrecall أعلى نسبيًا مقارنة بالنماذج الأخرى. تشير درجة F1 score المتوسطة إلى وجود توازن بين precision وrecall، ولكن الأداء العام لا يزال دون المستوى المطلوب.</p>
                <span className='font-bold'>:Decision Tree</span>
                <p className='leading-10 ' dir='rtl'>يتمتع النموذج بنسبة accuracy (71%) اعلى، لكن precision وrecall ودرجة F1 score مشابهة لنموذج Logistic Regression. يدل الaccuracy الأعلى أن هذا النموذج يتنبأ بعدد أكبر من الحالات بشكل صحيح، مما يجعله الأكثر موثوقية من حيث الأداء العام للتصنيف.</p>
                <span className='font-bold'>:Naive Bayes</span>
                <p className='leading-10 ' dir='rtl'>إن دقة هذا النموذج منخفضة نسبةَ للنماذج الآخرى يتمتع بدقة accuracy منخفضة نسبيًا (39%) وprecision منخفضة جدًا (15%)، مما يعني أنه يقدم المزيد من التنبؤات الإيجابية الخاطئة. في المقابل، يمتلك أعلى recall بنسبة (39%)، ولكن درجة F1 score المنخفضة (22%) تشير إلى أن النموذج يواجه صعوبة في تحقيق التوازن بين precision وrecall بفعالية.</p>
                <h1 className='font-bold text-2xl'>نتيجة المقارنة النهائية </h1>
                <p className='leading-10 	' dir='rtl' >
                    نموذج Decision Tree هو الأفضل أداءً بشكل عام بفضل accuracy الأعلى بشكل ملحوظ (71%). على الرغم من أن precision وrecall ودرجة F1 score مشابهة لنموذج Logistic Regression، فإن accuracy الأعلى بكثير تجعله الخيار الأفضل بين النماذج الثلاثة.
                    يأتي Logistic Regression في المرتبة التالية مع accuracy أقل قليلاً ولكن بدرجة F1 score مشابهة لـ Decision Tree.
                    أما Naive Bayes فهو يقدم أداءً ضعيفاً بسبب precision ودرجة F1 score المنخفضتين، على الرغم من امتلاكه recall جيد نسبياً. ولكن من المرجح أن يؤدي إلى العديد من الإيجابيات الكاذبة، مما يجعله خياراً أقل تفضيلاً.
                </p>
                <p dir='rtl'>
                <span className='font-bold' >في النهاية: </span>بناءً على هذه المقارنة، يجب اختيار شجرة القرار (Decision Tree)  لتصنيف المركبات، نظرًا لأدائها العام المتفوق من حيث الدقة.
                </p>

                </div>
    </div>

  )
}

export default Information