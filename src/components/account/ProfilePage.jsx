import React from 'react';
import Sidebar from '../shared/Sidebar';

export default function ProfilePage(props) {
  const { match } = props;
  return (
    <section className="page-content">
      <div className="row">
        <div className="col-sm-12 col-md-8">
        This is the ProfilePage.This is the id that was passed: {match.params.id}
        </div>
        <Sidebar />
      </div>
    </section>
  );
}
