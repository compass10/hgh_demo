// ========================================
// 공통 앱 기능
// ========================================

// 로그인 상태 체크 (admin 페이지에서는 관리자 권한 체크)
function checkAuth(requireAdmin = false) {
    const user = getCurrentUser();

    if (!user) {
        window.location.href = requireAdmin ? '../index.html' : 'index.html';
        return null;
    }

    if (requireAdmin && !user.isAdmin) {
        window.location.href = '../index.html';
        return null;
    }

    return user;
}

// 로그아웃 핸들러
function handleLogout() {
    logout();
    window.location.href = window.location.pathname.includes('/admin/') ? '../index.html' : 'index.html';
}

// 날짜 포맷
function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' });
}

// D-day 계산
function getDaysRemaining(expiryDate) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const expiry = new Date(expiryDate);
    const diff = Math.ceil((expiry - today) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 0;
}

// 상태 클래스 반환
function getStatusClass(status) {
    const statusMap = {
        '확정': 'status--confirmed',
        '신청완료': 'status--pending',
        '출석완료': 'status--completed',
        '취소': 'status--cancelled',
        '노쇼': 'status--noshow'
    };
    return statusMap[status] || '';
}

// 등급 클래스 반환
function getGradeClass(grade) {
    return grade === '정회원' ? 'grade--regular' : 'grade--education';
}

// 모달 열기
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

// 모달 닫기
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// 알림 표시
function showAlert(message, type = 'info') {
    alert(message);
}

// HTML 이스케이프
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
