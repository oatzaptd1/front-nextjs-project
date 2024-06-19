import React from 'react';

const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-500">
            <div className="bg-white p-8 rounded shadow-md text-center w-full max-w-md">
                <h1 className="text-2xl font-bold mb-2 text-blue-700">ร้านยากรุงเทพ</h1>
                <h2 className="text-lg font-semibold mb-6 text-blue-700">BANGKOK DRUGSTORE</h2>
                <form>
                    <div className="mb-4 relative">
                        <input
                            type="text"
                            placeholder="ชื่อผู้ใช้"
                            required
                            className="w-full pl-10 p-3 border border-gray-300 rounded"
                        />
                        <div className="absolute left-3 top-3 text-gray-500">👤</div>
                    </div>
                    <div className="mb-4 relative">
                        <input
                            type="password"
                            placeholder="รหัสผ่าน"
                            required
                            className="w-full pl-10 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"/>
                        <div className="absolute left-3 top-3 text-gray-500">🔒</div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
                    >
                        ลงชื่อเข้าใช้
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
