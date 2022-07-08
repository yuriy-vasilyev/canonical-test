import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { Post } from '@models/Post';
import axios from 'axios';
import { GENERIC_ERROR_MESSAGE, POSTS_URL } from '@constants';
import { Response } from '@models/Response';
import PostItem from '@components/PostItem';

interface HomeProps {
    query: Response<Post[]>;
}

const Home: NextPage<HomeProps> = ({ query }) => {
    return (
        <>
            <Head>
                <title>Canonical Test</title>
                <meta name="description" content="Canonical Test for Web Developer role" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="app-main">
                <div className="u-fixed-width">
                    {query.success && query.data.length > 0 && (
                        <div className="row">
                            {query.data.map((post) => (
                                <div key={post.id} className="col-4">
                                    <PostItem post={post} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const { data } = await axios.get<Post[]>(POSTS_URL);

        return {
            props: {
                query: {
                    success: true,
                    message: '',
                    /**
                     * Passing only published posts
                     * Ideally, it should be done with the query parameters
                     */
                    data: data.filter((post) => post.status === 'publish'),
                },
            },
        };
    } catch (error: any) {
        return {
            props: {
                query: {
                    success: false,
                    message: error.message ?? GENERIC_ERROR_MESSAGE,
                    data: null,
                },
            },
        };
    }
};

export default Home;
