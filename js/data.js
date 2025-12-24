// ========================================
// 데모용 더미 데이터
// ========================================

const DemoData = {
    // 데모용 사용자 계정
    users: [
        {
            id: 1,
            email: 'demo@test.com',
            password: '1234',
            name: '홍길동',
            phone: '010-1234-5678',
            company: '테스트 주식회사',
            companyId: 1,
            grade: '정회원',
            region: '서울',
            joinDate: '2024-03-15',
            membershipExpiry: '2025-12-31'
        },
        {
            id: 2,
            email: 'admin@test.com',
            password: 'admin',
            name: '관리자',
            phone: '010-0000-0000',
            company: '운영팀',
            companyId: 0,
            grade: '관리자',
            region: '서울',
            joinDate: '2024-01-01',
            membershipExpiry: '2099-12-31',
            isAdmin: true
        }
    ],

    // 회사 목록
    companies: [
        { id: 1, name: '테스트 주식회사', region: '서울' },
        { id: 2, name: 'ABC 컴퍼니', region: '부산' },
        { id: 3, name: 'XYZ 코퍼레이션', region: '대전' }
    ],

    // 교육 목록
    educations: [
        {
            id: 1,
            name: '조찬 포럼 - 1월',
            description: '매월 진행되는 조찬 포럼입니다.',
            date: '2025-01-25',
            time: '07:30 - 09:00',
            offline: { capacity: 50, remaining: 15, location: '서울 강남구 교육센터' },
            online: { capacity: 100, remaining: 58, location: 'Zoom' }
        },
        {
            id: 2,
            name: 'React 기초 교육',
            description: 'React의 기초 개념과 컴포넌트 작성법을 배웁니다.',
            date: '2025-01-15',
            time: '14:00 - 17:00',
            offline: { capacity: 30, remaining: 5, location: '서울 강남구 교육센터' },
            online: { capacity: 50, remaining: 12, location: 'Zoom' }
        },
        {
            id: 3,
            name: 'TypeScript 심화 과정',
            description: 'TypeScript의 고급 기능과 실전 활용법을 학습합니다.',
            date: '2025-01-20',
            time: '09:00 - 18:00',
            offline: { capacity: 20, remaining: 2, location: '서울 강남구 교육센터' },
            online: { capacity: 40, remaining: 15, location: 'Google Meet' }
        },
        {
            id: 4,
            name: '혁신 포럼',
            description: '격월로 진행되는 혁신 포럼입니다.',
            date: '2025-02-10',
            time: '14:00 - 17:00',
            offline: { capacity: 40, remaining: 28, location: '서울 강남구 교육센터' },
            online: { capacity: 80, remaining: 50, location: 'Zoom' }
        },
        {
            id: 5,
            name: 'Node.js 백엔드 개발',
            description: 'Node.js와 Express를 활용한 서버 개발을 배웁니다.',
            date: '2025-01-18',
            time: '10:00 - 12:00',
            offline: { capacity: 25, remaining: 10, location: '서울 강남구 교육센터' },
            online: { capacity: 50, remaining: 32, location: 'Zoom' }
        },
        {
            id: 6,
            name: 'AWS 클라우드 기초',
            description: 'AWS 클라우드 서비스의 기초를 학습합니다.',
            date: '2025-02-05',
            time: '13:00 - 17:00',
            offline: { capacity: 30, remaining: 20, location: '서울 강남구 교육센터' },
            online: { capacity: 60, remaining: 45, location: 'Zoom' }
        }
    ],

    // 예약 목록 (초기 데이터)
    reservations: [
        {
            id: 1,
            userId: 1,
            educationId: 2,
            educationName: 'React 기초 교육',
            type: '온라인',
            date: '2025-01-15',
            time: '14:00 - 17:00',
            location: 'Zoom 링크',
            status: '확정',
            appliedAt: '2025-01-10',
            applicants: [
                { name: '홍길동', phone: '010-1234-5678', company: '테스트 주식회사' }
            ]
        },
        {
            id: 2,
            userId: 1,
            educationId: 3,
            educationName: 'TypeScript 심화 과정',
            type: '현장',
            date: '2025-01-20',
            time: '09:00 - 18:00',
            location: '서울 강남구 교육센터',
            status: '신청완료',
            appliedAt: '2025-01-12',
            applicants: [
                { name: '홍길동', phone: '010-1234-5678', company: '테스트 주식회사' },
                { name: '김철수', phone: '010-9876-5432', company: '테스트 주식회사' }
            ]
        },
        {
            id: 3,
            userId: 1,
            educationId: 5,
            educationName: 'Node.js 백엔드 개발',
            type: '온라인',
            date: '2025-01-10',
            time: '10:00 - 12:00',
            location: 'Google Meet',
            status: '출석완료',
            appliedAt: '2025-01-08',
            applicants: [
                { name: '홍길동', phone: '010-1234-5678', company: '테스트 주식회사' }
            ]
        }
    ],

    // 관리자용 전체 예약 데이터
    adminReservations: [
        {
            id: 1,
            applicantName: '홍길동',
            company: '테스트 주식회사',
            phone: '010-1234-5678',
            email: 'hong@test.com',
            grade: '정회원',
            educationName: 'React 기초 교육',
            educationType: '온라인',
            date: '2025-01-15',
            time: '14:00 - 17:00',
            status: '확정',
            appliedAt: '2025-01-10',
            membershipExpiry: '2025-12-31'
        },
        {
            id: 2,
            applicantName: '김철수',
            company: '테스트 주식회사',
            phone: '010-9876-5432',
            email: 'kim@test.com',
            grade: '교육회원',
            educationName: 'TypeScript 심화 과정',
            educationType: '현장',
            date: '2025-01-20',
            time: '09:00 - 18:00',
            status: '신청완료',
            appliedAt: '2025-01-12',
            membershipExpiry: '2025-06-30'
        },
        {
            id: 3,
            applicantName: '이영희',
            company: 'ABC 컴퍼니',
            phone: '010-5555-6666',
            email: 'lee@abc.com',
            grade: '정회원',
            educationName: 'Node.js 백엔드 개발',
            educationType: '온라인',
            date: '2025-01-18',
            time: '10:00 - 12:00',
            status: '출석완료',
            appliedAt: '2025-01-08',
            membershipExpiry: '2025-12-31'
        },
        {
            id: 4,
            applicantName: '박민수',
            company: 'XYZ 코퍼레이션',
            phone: '010-7777-8888',
            email: 'park@xyz.com',
            grade: '정회원',
            educationName: '조찬 포럼 - 1월',
            educationType: '현장',
            date: '2025-01-25',
            time: '07:30 - 09:00',
            status: '신청완료',
            appliedAt: '2025-01-15',
            membershipExpiry: '2025-09-30'
        }
    ]
};

// localStorage 초기화
function initDemoData() {
    if (!localStorage.getItem('demoReservations')) {
        localStorage.setItem('demoReservations', JSON.stringify(DemoData.reservations));
    }
    if (!localStorage.getItem('demoAdminReservations')) {
        localStorage.setItem('demoAdminReservations', JSON.stringify(DemoData.adminReservations));
    }
}

// 예약 목록 가져오기
function getReservations(userId) {
    const reservations = JSON.parse(localStorage.getItem('demoReservations') || '[]');
    return reservations.filter(r => r.userId === userId);
}

// 모든 예약 가져오기 (관리자용)
function getAllReservations() {
    return JSON.parse(localStorage.getItem('demoAdminReservations') || '[]');
}

// 예약 추가
function addReservation(reservation) {
    const reservations = JSON.parse(localStorage.getItem('demoReservations') || '[]');
    const newId = Math.max(...reservations.map(r => r.id), 0) + 1;
    reservation.id = newId;
    reservations.push(reservation);
    localStorage.setItem('demoReservations', JSON.stringify(reservations));
    return reservation;
}

// 예약 상태 변경
function updateReservationStatus(reservationId, newStatus) {
    const reservations = JSON.parse(localStorage.getItem('demoReservations') || '[]');
    const index = reservations.findIndex(r => r.id === reservationId);
    if (index !== -1) {
        reservations[index].status = newStatus;
        localStorage.setItem('demoReservations', JSON.stringify(reservations));
    }

    // 관리자 목록도 업데이트
    const adminReservations = JSON.parse(localStorage.getItem('demoAdminReservations') || '[]');
    const adminIndex = adminReservations.findIndex(r => r.id === reservationId);
    if (adminIndex !== -1) {
        adminReservations[adminIndex].status = newStatus;
        localStorage.setItem('demoAdminReservations', JSON.stringify(adminReservations));
    }
}

// 로그인
function login(email, password) {
    const user = DemoData.users.find(u => u.email === email && u.password === password);
    if (user) {
        const userData = { ...user };
        delete userData.password;
        localStorage.setItem('currentUser', JSON.stringify(userData));
        return userData;
    }
    return null;
}

// 현재 로그인한 사용자 가져오기
function getCurrentUser() {
    const userStr = localStorage.getItem('currentUser');
    return userStr ? JSON.parse(userStr) : null;
}

// 로그아웃
function logout() {
    localStorage.removeItem('currentUser');
}

// 초기화
initDemoData();
