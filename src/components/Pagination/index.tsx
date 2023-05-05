import style from './index.module.scss';
import layoutStyle from '@/components/Layout/index.module.scss';

interface Props {
    /**
     * 当前页码
     */
    currentPage: number;
    /**
     * 总条数
     */
    total: number;
    /**
     * 每页条数
     */
    pageSize: number;
    /**
     * 切换页码
     */
    onChange: (nextPage: number) => void;
}

function Pagination({ currentPage, total, pageSize, onChange }: Props) {
    // 最大页码
    const maxPageCount = Math.ceil(total / pageSize);
    if (maxPageCount <= 1) {
        return null;
    }

    // 切换页码
    const handleChange = (type: 'prev' | 'next') => {
        if (type === 'prev' && currentPage > 1) {
            // 页面滚动到顶部
            const el = document.getElementsByClassName(layoutStyle.right)[0];
            el.scrollTop = 0;
            onChange(currentPage - 1);
        } else if (type === 'next' && currentPage < maxPageCount) {
            // 页面滚动到顶部
            const el = document.getElementsByClassName(layoutStyle.right)[0];
            el.scrollTop = 0;
            onChange(currentPage + 1);
        }
    }

    return (
        <div className={style.pagination}>
            <div className='page-btn' onClick={() => handleChange('prev')}>&lt;</div>
            <div className="page">{currentPage}</div>
            <div className="page-btn" onClick={() => handleChange('next')}>&gt;</div>
        </div>
    );
}

export default Pagination;