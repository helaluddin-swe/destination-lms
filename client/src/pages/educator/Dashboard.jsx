import React, { useEffect, useState } from 'react'
import { assets, dummyDashboardData } from '../../assets/assets'
import Loading from '../../components/student/Loading'
import { useAppContext } from '../../context/AppContext'

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null)
  const { currency } = useAppContext()

  const fetchDashboardData = async () => {
    // 1. Ensure data is null initially (triggers Loading)
    setDashboardData(null)

    // 2. Simulate a 1.5 second network delay
    setTimeout(() => {
      setDashboardData(dummyDashboardData)
    }, 1500)
  }

  useEffect(() => {
    fetchDashboardData()
  }, [])

  // If dashboardData is null, the Loading component WILL show
  if (!dashboardData) {
    return <Loading />
  }

  return (
    <div className='min-h-screen bg-gray-50 p-4 md:p-8 pt-8 pl-4'>
      {/* Stats Section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
        {/* div-1 */}
        <div className='flex items-center gap-4 bg-white p-6 rounded-lg border border-gray-200 shadow-sm'>
          <img src={assets.patients_icon} alt="students" className='w-12 p-2 bg-blue-50 rounded-lg' />
          <div className='text-center'>
            <p className='text-2xl font-bold text-gray-800'>{dashboardData.enrolledStudentsData.length}</p>
            <p className='text-sm text-gray-500'>Total Enrolled</p>
          </div>
        </div>
        {/* div-02 */}
        <div className='flex items-center gap-4 bg-white p-6 rounded-lg border border-gray-200 shadow-sm'>
          <img src={assets.appointments_icon} alt="courses" className='w-12 p-2 bg-orange-50 rounded-lg' />
          <div className='text-center'>
            <p className='text-2xl font-bold text-gray-800'>{dashboardData.totalCourses}</p>
            <p className='text-sm text-gray-500'>Total Courses</p>
          </div>
        </div>
      {/* div-03 */}
        <div className='flex items-center gap-4 bg-white p-6 rounded-lg border border-gray-200 shadow-sm'>
          <img src={assets.earning_icon} alt="earnings" className='w-12 p-2 bg-green-50 rounded-lg' />
          <div>
            <p className='text-2xl font-bold text-gray-800'>{currency}{dashboardData.totalEarnings}</p>
            <p className='text-sm text-gray-500'>Total Earnings</p>
          </div>
        </div>
      </div>

      {/* Enrollments Table */}
      <div className='mt-10 bg-white border border-gray-200 rounded-lg shadow-sm'>
        <div className='p-5 border-b border-gr100ay-200'>
          {/* table div heading  */}
          <h2 className='text-lg font-semibold text-gray-800'>Latest Enrollments</h2>
        </div>


        <div className='overflow-x-auto'>
          <table className='w-full text-left'>
            {/* table head start */}
            <thead className='bg-gray-50 text-gray-600 font-medium border-b border-gray-200'>
              <tr>
                <th className='px-6 py-4 text-sm'>#</th>
                <th className='px-6 py-4 text-sm'>Student</th>
                <th className='px-6 py-4 text-sm'>Course Title</th>
              </tr>
            </thead>
            {/* table body start */}
            <tbody className='divide-y divide-amber-500'>
              {dashboardData.enrolledStudentsData.map((item, index) => (
                <tr key={index} className='hover:bg-gray-50 transition-colors'>

                  {/* table data index no or serial nubmer */}
                  <td className='px-6 py-4 text-sm text-gray-500'>{index + 1}</td>
                  {/* table data profile and students name */}
                  <td className='px-6 py-4 flex items-center gap-3'>
                    <img
                      src={item.student.imageUrl}
                      alt={item.student.name}
                      className='w-9 h-9 rounded-full border border-gray-200'
                    />
                    <span className='font-medium text-gray-700'>{item.student.name}</span>
                  </td>

                  {/* table date course title */}
                  <td className='px-6 py-4 text-sm text-gray-600'>{item.courseTitle}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard