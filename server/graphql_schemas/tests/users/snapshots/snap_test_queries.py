# -*- coding: utf-8 -*-
# snapshottest: v1 - https://goo.gl/zC4yUc
from __future__ import unicode_literals

from snapshottest import Snapshot


snapshots = Snapshot()

snapshots['QueryAndelaUserTestCase::test_query_users_by_id 1'] = {
    'data': {
        'user': {
            'googleId': '344445',
            'id': 'QW5kZWxhVXNlck5vZGU6MTA5',
            'userPicture': 'https://lh5.googleusercontent.com'
        }
    }
}

snapshots['QueryAndelaUserTestCase::test_query_users_list 1'] = {
    'data': {
        'usersList': {
            'edges': [
                {
                    'node': {
                        'googleId': '123233',
                        'id': 'QW5kZWxhVXNlck5vZGU6MTEw',
                        'userPicture': 'https://lh5.googleusercontent.com'
                    }
                },
                {
                    'node': {
                        'googleId': '344445',
                        'id': 'QW5kZWxhVXNlck5vZGU6MTEx',
                        'userPicture': 'https://lh5.googleusercontent.com'
                    }
                }
            ]
        }
    }
}