import { FC } from 'react';
import { Post } from '@models/Post';
import moment from 'moment';
import { DATE_DISPLAY_FORMAT } from '@constants';
import { getTermsByTaxonomy } from '@helpers';
import styles from './styles.module.scss';

interface PostProps {
    post: Post;
}

const Index: FC<PostProps> = ({ post }) => {
    const author = post._embedded?.author?.[0] ?? null;
    const topics = getTermsByTaxonomy('topic', post._embedded['wp:term'] ?? []);
    const categories = getTermsByTaxonomy('category', post._embedded['wp:term'] ?? []);

    return (
        <div className={styles.card}>
            {topics.length > 0 && (
                <div className={`p-card__inner ${styles.card__header}`}>
                    {topics.map((term, index) => {
                        return (
                            <a className={styles.card__headerLink} href={term.link} key={term.id}>
                                {term.name}
                                {index < topics.length - 1 && ', '}
                            </a>
                        );
                    })}
                </div>
            )}

            {post.featured_media && (
                <div className={`p-card__inner u-no-padding--bottom ${styles.card__imageWrapper}`}>
                    <img className="p-card__image" src={post.featured_media} alt={post.title.rendered} />
                </div>
            )}

            <div className={`p-card__inner u-no-padding--top ${styles.card__body}`}>
                <h3 className={`p-heading--4 ${styles.card__title}`}>
                    <a href={post.link}>{post.title.rendered}</a>
                </h3>

                <div className="u-text-style--italic">
                    {author ? (
                        <>
                            By <a href={author.link}>{author.name}</a> on{' '}
                            {moment(post.date).format(DATE_DISPLAY_FORMAT)}
                        </>
                    ) : (
                        <>{moment(post.date).format(DATE_DISPLAY_FORMAT)}</>
                    )}
                </div>
            </div>

            {categories.length > 0 && (
                <div className={`p-card__inner ${styles.card__footer}`}>
                    {categories.map((term, index) => {
                        return (
                            <a className={styles.card__footerLink} href={term.link} key={term.id}>
                                {term.name}
                                {index < categories.length - 1 && ', '}
                            </a>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Index;
