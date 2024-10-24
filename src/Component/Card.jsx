import React, { useState, useEffect } from 'react';
function Card() {
    const [Student, setstudent] = useState([
        { Accuracy: '33%', Precision: '42%',Recall	:'33%',F1:'36%',models:'Logistics alert' },
        { Accuracy: '71%', Precision: '42%',Recall	:'33%',F1:'36%',models:'DecisionTree' },
        { Accuracy: '39%', Precision: '15%',Recall	:'39%',F1:'22%',models:'naive_bayes' },
        

      ]);
  return (
    <>
    <div className="container mx-auto  flex flex-col space-y-5 justify-center items-center py-10   " id='card'>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full ">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 text-center"  >
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" >
                <tr>
                    <th scope="col" className="px-6 py-3">
                    Accuracy
                    </th>
                    <th scope="col" className="px-6 py-3 ">
                    Precision
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Recall
                    </th>
                    <th scope="col" className="px-6 py-3">
                        F1 
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Models
                    </th>
                </tr>
                </thead>
                <tbody>
                        {Student.map((item)=>(

                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 ">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.Accuracy}
                    </th>
                    <td className="px-6 py-4 text-gray-900">
                    {item.Precision}
                    </td>
                    <td className="px-6 py-4 text-gray-900">
                    {item.Recall}
                    </td>
                    <td className="px-6 py-4 text-gray-900">
                    {item.F1}
                    </td>
                    <td className="px-6 py-4 text-gray-900">
                    {item.models}
                    </td>
                </tr>
                ))}
                </tbody>
            </table>
        </div>

</div>
</>
  )
}

export default Card